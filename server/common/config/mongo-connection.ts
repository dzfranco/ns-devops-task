import { ContainerModule, interfaces } from 'inversify';

import { ENVIRONMENTS } from '../constants/environments';
import { DATABASE_IDENTIFIER } from '../constants/identifiers';

import { MyDatabase } from './mongo';

export const mongoConnection = new ContainerModule((bind: interfaces.Bind) => {
	let baseMongoConnection: MyDatabase;

	if (process.env.NODE_ENV === ENVIRONMENTS.PRODUCTION || process.env.NODE_ENV === ENVIRONMENTS.STAGING) {
		baseMongoConnection = new MyDatabase(process.env.FULL_MONGO_URL);
	}

	if (process.env.NODE_ENV === ENVIRONMENTS.DEVELOPMENT) {
		baseMongoConnection = new MyDatabase({
			host: process.env.MONGO_URL,
			port: Number.parseInt(process.env.MONGO_PORT),
			database: process.env.MONGO_DATABASE,
		});
	}
	bind<MyDatabase>(DATABASE_IDENTIFIER.MYDATABASE).toConstantValue(baseMongoConnection);
});
