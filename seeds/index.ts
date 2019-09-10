import * as path from 'path';

import { Seeder } from 'mongo-seeding';
import { ENVIRONMENTS } from '../server/common/constants/environments';
import { configureEnv } from '../server/common/env';
configureEnv();

let config;
if (process.env.NODE_ENV === ENVIRONMENTS.DEVELOPMENT) {
	config = {
		database: {
			name: process.env.MONGO_DATABASE,
			host: process.env.MONGO_URL,
			port: Number.parseInt(process.env.MONGO_PORT, 10),
			username: process.env.MONGO_USERNAME,
			password: process.env.MONGO_PASSWORD,
		},
		dropDatabase: false,
		dropCollections: true,
	};
} else {
	config = {
		database: process.env.FULL_MONGO_URL,
		dropDatabase: false,
		dropCollections: true,
	};
}

const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(path.resolve('seeds/data'), {
	extensions: ['ts'],
});

export const configSeeder = (): Promise<void> => {
	return seeder
		.import(collections)
		.then(() => {
			console.log('Seeds loaded correctly');
		})
		.catch(err => {
			console.log('Error loading seeds', err);
		});
};
