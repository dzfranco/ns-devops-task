import 'reflect-metadata';
import MongodbMemoryServer from 'mongodb-memory-server';
import { addMonths } from 'date-fns';
import { configureEnv } from '../../common/env';
import { IMonthlyExpenseService } from '../../api/interfaces/service/imonthly-expense';
import { MyDatabase } from '../../common/config/mongo';
import { IOCContainer } from '../../common/config/ioc_config';
import { DATABASE_IDENTIFIER, SERVICE_IDENTIFIER } from '../../common/constants/identifiers';
import { MONTHLY_EXPENSE_MOCK_THIS_MONTHS_REGISTRIES } from '../mocks/monthly-expenses/this-month';
import { MonthlyExpense } from '../../common/models/monthly-expense.model';
import {
	MONTHLY_EXPENSE_MOCK_TIMEZONE_LAST_MONTH,
	LA_TIMEZONE_ID,
	JAPAN_TIMEZONE_ID,
} from '../mocks/monthly-expenses/timezone';
import {
	MONTHLY_EXPENSE_MOCK_LAST_MONTHS_REGISTRIES,
	NOT_MIGRATED_CATEGORY_ID,
	MIGRATED_CATEGORY_ID,
	MIGRATED_REGISTRY,
	MIGRATED_ELEMENT_ID,
} from '../mocks/monthly-expenses/last-month';

let mongoServer: MongodbMemoryServer;

describe('Monthly Expense Service Tests', () => {
	let monthlyExpenseService: IMonthlyExpenseService;
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
			monthlyExpenseService = container.get<IMonthlyExpenseService>(SERVICE_IDENTIFIER.MONTHLY_EXPENSE);
			return done();
		} catch (error) {
			return done(error);
		}
	}, 30000);

	beforeEach(async () => {
		await temporalConnection.MonthlyExpense.remove({});
	});

	it("Should not migrate this month's Expenses", async () => {
		await temporalConnection.MonthlyExpense.insert(MONTHLY_EXPENSE_MOCK_THIS_MONTHS_REGISTRIES);
		const initialCount = await await temporalConnection.MonthlyExpense.find({}).count();
		expect(initialCount).toBe(2);
		await monthlyExpenseService.carryOverMonthlyExpenses();
		const count = await temporalConnection.MonthlyExpense.find({}).count();
		expect(count).toBe(2);
	});

	it('Should not migrate already migrated expenses', async () => {
		await temporalConnection.MonthlyExpense.insert(MONTHLY_EXPENSE_MOCK_LAST_MONTHS_REGISTRIES);
		await monthlyExpenseService.carryOverMonthlyExpenses();
		const count = await temporalConnection.MonthlyExpense.find({
			customCategory: NOT_MIGRATED_CATEGORY_ID,
		}).count();
		expect(count).toBe(1);
	});

	it('Should migrate last month expenses and add one month to the date', async () => {
		await temporalConnection.MonthlyExpense.insert(MONTHLY_EXPENSE_MOCK_LAST_MONTHS_REGISTRIES);
		await monthlyExpenseService.carryOverMonthlyExpenses();
		const elements = await temporalConnection.MonthlyExpense.find({
			customCategory: MIGRATED_CATEGORY_ID,
			hasCarriedOver: false,
		}).toArray();
		elements.forEach((element: MonthlyExpense) => {
			expect(element.name).toBe(MIGRATED_REGISTRY.name);
			expect(element.amount).toBe(MIGRATED_REGISTRY.amount);
			expect(element.currency).toBe(MIGRATED_REGISTRY.currency);
			expect(element.date).toEqual(addMonths(MIGRATED_REGISTRY.date, 1));
		});
		expect(elements.length).toBe(1);
	});

	it('Should change hasCarriedOver status on migrated elements', async () => {
		await temporalConnection.MonthlyExpense.insert(MONTHLY_EXPENSE_MOCK_LAST_MONTHS_REGISTRIES);
		await monthlyExpenseService.carryOverMonthlyExpenses();
		const element = await temporalConnection.MonthlyExpense.findOne({
			_id: MIGRATED_ELEMENT_ID,
		});
		expect(element).not.toBe(null);
		expect(element.hasCarriedOver).toEqual(true);
	});

	it('Should migrate elements when the month is correct in another timezone', async () => {
		await temporalConnection.MonthlyExpense.insert(MONTHLY_EXPENSE_MOCK_TIMEZONE_LAST_MONTH);
		await monthlyExpenseService.carryOverMonthlyExpenses();
		const elements = await temporalConnection.MonthlyExpense.find({
			customCategory: MIGRATED_CATEGORY_ID,
			hasCarriedOver: false,
		}).toArray();
		expect(elements.length).toBe(2);
		expect(elements).toContainEqual(expect.objectContaining({ _id: LA_TIMEZONE_ID }));
		expect(elements).toContainEqual(expect.objectContaining({ _id: JAPAN_TIMEZONE_ID }));
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
