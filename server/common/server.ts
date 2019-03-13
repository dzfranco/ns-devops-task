import * as path from 'path';

import { Container } from 'inversify';

import { configSeeder } from '../../seeds/index';
import { IIncomeSourcesCron } from '../api/interfaces/cron-task/iincomesource-cron';
import { IMonthlyExpensesCron } from '../api/interfaces/cron-task/imonthlyexpense-cron';
import { IMonthlyExpenseService } from '../api/interfaces/service/imonthly-expense';

import { configureEnv } from './env';

import { IOCContainer } from './config/ioc_config';
import { ENVIRONMENTS } from './constants/environments';
import { DATABASE_IDENTIFIER, CRON_TASK_IDENTIFIERS, SERVICE_IDENTIFIER } from './constants/identifiers';
import { MyDatabaseI } from './interfaces/imongo';
import { IIncomeSourceService } from '../api/interfaces/service/iincome-source';

/**
 * Node Express Server setup and configuration
 */
export class Server {
	private container: Container;
	private monthlyExpenseService: IMonthlyExpenseService;
	private incomeSourceService: IIncomeSourceService;

	constructor() {
		configureEnv();
		this.container = IOCContainer.getInstance().getContainer();
		this.monthlyExpenseService = this.container.get(SERVICE_IDENTIFIER.MONTHLY_EXPENSE) as IMonthlyExpenseService;
		this.incomeSourceService = this.container.get(SERVICE_IDENTIFIER.INCOME_SOURCE) as IIncomeSourceService;
	}
	/**
	 * @description Connects to the database
	 */
	public async connectToDatabase() {
		// Test environment spins up temporal MongoDB Instances, so we don't need to connect to the database
		if (process.env.NODE_ENV !== ENVIRONMENTS.TEST) {
			console.log('Connecting to Mongo ... ');
			const database: MyDatabaseI = this.container.get(DATABASE_IDENTIFIER.MYDATABASE);
			try {
				const connection = await database.connect();
				console.log('Connected to Database');
				return connection;
			} catch (error) {
				console.log(error);
				throw error;
			}
		}
	}

	/**
	 * @description Runs migrations
	 */
	public async runMigrations() {
		await this.monthlyExpenseService.carryOverMonthlyExpenses();
		await this.incomeSourceService.carryOverIncomeSources();
	}
}
