import { Container } from 'inversify';

import { configureEnv } from './env';

import { IOCContainer } from './config/ioc_config';
import { ENVIRONMENTS } from './constants/environments';
import { DATABASE_IDENTIFIER } from './constants/identifiers';
import { MyDatabaseI } from './interfaces/imongo';

/**
 * Node Express Server setup and configuration
 */
export class Server {
	private container: Container;

	constructor() {
		configureEnv();
		this.container = IOCContainer.getInstance().getContainer();
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
	public async runTask() {
		console.log('Running task');
	}
}
