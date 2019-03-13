import { Container } from 'inversify';

import 'reflect-metadata';

import { ILogger, IMetrics } from '../interfaces';
import { LogService, MetricsService } from '../services';
import { SERVICE_IDENTIFIER, PERSISTENCE_IDENTIFIERS } from '../constants/identifiers';
import LoggerMiddleware from '../middleware/logger-middleware';
import { IUserService } from '../../api/interfaces';
import { UserService } from '../../api/services';
import { CustomCategoryPersistence } from '../../api/persistence/custom-category.persistence';
import { DailyTransactionPersistence } from '../../api/persistence/daily-transaction.persistence';
import { IncomeSourcePersistence } from '../../api/persistence/income-source.persistence';
import { MonthlyExpensePersistence } from '../../api/persistence/monthly-expense.persistence';
import { UserPersistence } from '../../api/persistence/user';
import { CustomCategoryService } from '../../api/services/custom-category.service';
import { IncomeSourceService } from '../../api/services/income-source.service';
import { MonthlyExpenseService } from '../../api/services/monthly-expense.service';
import { ICustomCategoryPersistence } from '../../api/interfaces/persistence/icustom-category.persistence';
import { ICustomSubCategoryPersistence } from '../../api/interfaces/persistence/icustom-subcategory.persistence';
import { IDailytransactionPersistence } from '../../api/interfaces/persistence/idaily-transaction.persistence';
import { IIncomeSourcePersistence } from '../../api/interfaces/persistence/iincome-source.persistence';
import { IMonthlyExpensePersistence } from '../../api/interfaces/persistence/imonthly-expense.persistence';
import { IUserPersistence } from '../../api/interfaces/persistence/iuser.persistence';
import { ICustomCategoryService } from '../../api/interfaces/service/icustom-category';
import { IIncomeSourceService } from '../../api/interfaces/service/iincome-source';
import { IMonthlyExpenseService } from '../../api/interfaces/service/imonthly-expense';
import { DatesHelperService } from '../../api/services/helpers/dates-helper.service';
import { RedactService } from '../../api/services/helpers/redact.service';
import { IDatesHelperService } from '../../api/interfaces/service/helpers/idates-helper';
import { IRedactService } from '../../api/interfaces/service/helpers/iredact-currency';

import { mongoConnection } from './mongo-connection';

/**
 * IOC Container - Singleton IOC container class
 * Initialized the IOC container and sets up all the container bindings
 */
export class IOCContainer {
	public static getInstance() {
		if (!IOCContainer.instance) {
			IOCContainer.instance = new IOCContainer();
			// Initialize the container
			const container = new Container();
			// Define persistence Bindings
			container.bind<IUserPersistence>(PERSISTENCE_IDENTIFIERS.USER).to(UserPersistence);
			container
				.bind<IDailytransactionPersistence>(PERSISTENCE_IDENTIFIERS.DAILY_TRANSACTION)
				.to(DailyTransactionPersistence);
			container
				.bind<ICustomCategoryPersistence>(PERSISTENCE_IDENTIFIERS.CUSTOM_CATEGORY)
				.to(CustomCategoryPersistence);
			container
				.bind<IMonthlyExpensePersistence>(PERSISTENCE_IDENTIFIERS.MONTHLY_EXPENSE)
				.to(MonthlyExpensePersistence);
			container.bind<IIncomeSourcePersistence>(PERSISTENCE_IDENTIFIERS.INCOME_SOURCE).to(IncomeSourcePersistence);
			/* 
			 * Define service bindings here
			*/
			container
				.bind<IDatesHelperService>(SERVICE_IDENTIFIER.DATES_HELPER)
				.to(DatesHelperService)
				.inSingletonScope();
			container
				.bind<IRedactService>(SERVICE_IDENTIFIER.REDACT)
				.to(RedactService)
				.inSingletonScope();
			container

				.bind<IIncomeSourceService>(SERVICE_IDENTIFIER.INCOME_SOURCE)
				.to(IncomeSourceService)
				.inSingletonScope();
			container
				.bind<IMonthlyExpenseService>(SERVICE_IDENTIFIER.MONTHLY_EXPENSE)
				.to(MonthlyExpenseService)
				.inSingletonScope();
			container
				.bind<ICustomCategoryService>(SERVICE_IDENTIFIER.CUSTOM_CATEGORY)
				.to(CustomCategoryService)
				.inSingletonScope();
			container
				.bind<IUserService>(SERVICE_IDENTIFIER.USER)
				.to(UserService)
				.inSingletonScope();
			container
				.bind<ILogger>(SERVICE_IDENTIFIER.LOGGER)
				.to(LogService)
				.inSingletonScope();
			container
				.bind<IMetrics>(SERVICE_IDENTIFIER.METRICS)
				.to(MetricsService)
				.inSingletonScope();

			// Logger Binding
			container.bind<LoggerMiddleware>(SERVICE_IDENTIFIER.LOGGER_MIDDLEWARE).to(LoggerMiddleware);
			// Load DatabaseConnection

			container.load(mongoConnection);

			IOCContainer.instance.container = container;
		}
		return IOCContainer.instance;
	}

	private static instance: IOCContainer;
	private container: Container;
	private constructor() {}

	public getContainer(): Container {
		return this.container;
	}

	public setContainer(container: Container) {
		this.container = container;
	}
}
