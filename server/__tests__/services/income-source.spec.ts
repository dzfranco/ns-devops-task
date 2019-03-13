import 'reflect-metadata';
import MongodbMemoryServer from 'mongodb-memory-server';
import { addMonths } from 'date-fns';
import { configureEnv } from '../../common/env';
import { MyDatabase } from '../../common/config/mongo';
import { IOCContainer } from '../../common/config/ioc_config';
import { DATABASE_IDENTIFIER, SERVICE_IDENTIFIER } from '../../common/constants/identifiers';
import { IIncomeSourceService } from '../../api/interfaces/service/iincome-source';
import { IncomeSource } from '../../common/models/income-source';
import { INCOME_SOURCE_MOCK_THIS_MONTHS_REGISTRIES } from '../mocks/income-source/this-month';
import {
	INCOME_SOURCE_MOCK_TIMEZONE_LAST_MONTH,
	LA_TIMEZONE_ID_INCOME_SOURCE,
	JAPAN_TIMEZONE_ID_INCOME_SOURCE,
} from '../mocks/income-source/timezone';
import {
	INCOME_SOURCE_NOT_MIGRATED_CATEGORY_ID,
	INCOME_SOURCE_MIGRATED_ELEMENT_ID,
} from '../mocks/income-source/last-month';
import {
	INCOME_SOURCE_MOCK_LAST_MONTHS_REGISTRIES,
	INCOME_SOURCE_MIGRATED_CATEGORY_ID,
	MIGRATED_INCOME_SOURCE,
} from '../mocks/income-source/last-month';

let mongoServer: MongodbMemoryServer;

describe('Monthly Expense Service Tests', () => {
	let incomeSourceService: IIncomeSourceService;
	let temporalConnection: MyDatabase;
	beforeAll(async done => {
		configureEnv();
		try {
			// Instantiate the temporary mongoDB Server and bind it to the container
			mongoServer = new MongodbMemoryServer({
				binary: {
					version: '4.0.4',
				},
			});
			const mongoUri = await mongoServer.getConnectionString();
			temporalConnection = new MyDatabase(mongoUri);
			const container = IOCContainer.getInstance().getContainer();
			await temporalConnection.connect();
			container.unbind(DATABASE_IDENTIFIER.MYDATABASE);
			container.bind<MyDatabase>(DATABASE_IDENTIFIER.MYDATABASE).toConstantValue(temporalConnection);
			// Bind the service to the container
			incomeSourceService = container.get<IIncomeSourceService>(SERVICE_IDENTIFIER.INCOME_SOURCE);
			return done();
		} catch (error) {
			return done(error);
		}
	}, 30000);

	beforeEach(async () => {
		await temporalConnection.IncomeSource.remove({});
	});

	it('Should migrate last month income sources and add one month to the date', async () => {
		await temporalConnection.IncomeSource.insert(INCOME_SOURCE_MOCK_LAST_MONTHS_REGISTRIES);
		await incomeSourceService.carryOverIncomeSources();
		const elements = await temporalConnection.IncomeSource.find({
			customCategory: INCOME_SOURCE_MIGRATED_CATEGORY_ID,
			hasCarriedOver: false,
		}).toArray();
		elements.forEach((element: IncomeSource) => {
			expect(element.name).toBe(MIGRATED_INCOME_SOURCE.name);
			expect(element.amount).toBe(MIGRATED_INCOME_SOURCE.amount);
			expect(element.date).toEqual(addMonths(MIGRATED_INCOME_SOURCE.date, 1));
		});
		expect(elements.length).toBe(1);
	});

	it('Should not migrate already migrated income sources', async () => {
		await temporalConnection.IncomeSource.insert(INCOME_SOURCE_MOCK_LAST_MONTHS_REGISTRIES);
		await incomeSourceService.carryOverIncomeSources();
		const count = await temporalConnection.IncomeSource.find({
			customCategory: INCOME_SOURCE_NOT_MIGRATED_CATEGORY_ID,
		}).count();
		expect(count).toBe(1);
	});

	it('Should change hasCarriedOver status on migrated elements', async () => {
		await temporalConnection.IncomeSource.insert(INCOME_SOURCE_MOCK_LAST_MONTHS_REGISTRIES);
		await incomeSourceService.carryOverIncomeSources();
		const element = await temporalConnection.IncomeSource.findOne({
			_id: INCOME_SOURCE_MIGRATED_ELEMENT_ID,
		});
		expect(element).not.toBe(null);
		expect(element.hasCarriedOver).toEqual(true);
	});

	it('Should not migrate other expenses that do not belong to last month', async () => {
		await temporalConnection.IncomeSource.insert(INCOME_SOURCE_MOCK_THIS_MONTHS_REGISTRIES);
		await incomeSourceService.carryOverIncomeSources();
		const elements = await temporalConnection.IncomeSource.find({}).toArray();
		expect(elements).toContainEqual(expect.objectContaining({ _id: '5c367141696da9007b46bb84' }));
		expect(elements).toContainEqual(expect.objectContaining({ _id: '5c367141696da9007b46bb85' }));
		expect(elements).toContainEqual(expect.objectContaining({ _id: '5c367141696da9007b46bb86' }));
		expect(elements.length).toBe(3);
	});

	it('Should migrate elements when the month is correct in another timezone', async () => {
		await temporalConnection.IncomeSource.insert(INCOME_SOURCE_MOCK_TIMEZONE_LAST_MONTH);
		await incomeSourceService.carryOverIncomeSources();
		const elements = await temporalConnection.IncomeSource.find({
			customCategory: INCOME_SOURCE_MIGRATED_CATEGORY_ID,
			hasCarriedOver: false,
		}).toArray();
		expect(elements.length).toBe(2);
		expect(elements).toContainEqual(expect.objectContaining({ _id: LA_TIMEZONE_ID_INCOME_SOURCE }));
		expect(elements).toContainEqual(expect.objectContaining({ _id: JAPAN_TIMEZONE_ID_INCOME_SOURCE }));
	});

	afterAll(async done => {
		try {
			console.log('Cleanup');
			const container = IOCContainer.getInstance().getContainer();
			temporalConnection = container.get(DATABASE_IDENTIFIER.MYDATABASE);
			await temporalConnection.close();
			await mongoServer.stop();
			console.log('Finished cleanup');
			return done();
		} catch (error) {
			return fail(error);
		}
	});
});
