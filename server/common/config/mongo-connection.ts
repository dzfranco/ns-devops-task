import { ContainerModule, interfaces } from 'inversify';

import { ENVIRONMENTS } from '../constants/environments';
import { DATABASE_IDENTIFIER } from '../constants/identifiers';

import { MyDatabase } from './mongo';
import { configureEnv } from '../env';

export const mongoConnection = new ContainerModule((bind: interfaces.Bind) => {
	configureEnv();
	let baseMongoConnection: MyDatabase;

	if (process.env.NODE_ENV === ENVIRONMENTS.PRODUCTION || process.env.NODE_ENV === ENVIRONMENTS.STAGING) {
		baseMongoConnection = new MyDatabase(process.env.FULL_MONGO_URL);
	}

	if (process.env.NODE_ENV === ENVIRONMENTS.DEVELOPMENT) {
		console.log(process.env.MONGO_URL, process.env.MONGO_PORT, process.env.MONGO_DATABASE);
		baseMongoConnection = new MyDatabase({
			host: process.env.MONGO_URL,
			port: Number.parseInt(process.env.MONGO_PORT),
			database: process.env.MONGO_DATABASE,
		});
	}
	bind<MyDatabase>(DATABASE_IDENTIFIER.MYDATABASE).toConstantValue(baseMongoConnection);
});
