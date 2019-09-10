import 'reflect-metadata';

import * as path from 'path';

import * as express from 'express';

import { Request, Response } from 'express';

import { InversifyExpressServer } from 'inversify-express-utils';

import * as partialResponse from 'express-partial-response';

import { swaggerify, secureApp, configLogging, configMetrics, configHealthChecks, addCompression } from './config';

import { IOCContainer } from './config/ioc_config';
import { ENVIRONMENTS } from './constants/environments';
import { DATABASE_IDENTIFIER, SERVICE_IDENTIFIER } from './constants/identifiers';
import { MyDatabaseI } from './interfaces/imongo';
import { configSeeder } from '../../seeds/index';
import { ILogger } from './interfaces';

const responseTime = require('response-time');

/**
 * Node Express Server setup and configuration
 */
export class Server {
	public server: InversifyExpressServer;

	constructor() {
		let root: string;

		// Setup application root
		root =
			process.env.NODE_ENV === ENVIRONMENTS.DEVELOPMENT
				? path.normalize(__dirname + '/../..')
				: path.normalize('.');
		const container = IOCContainer.getInstance().getContainer();
		// Get Logger
		const logger: ILogger = container.get(SERVICE_IDENTIFIER.LOGGER);

		// Test environment spins up temporal MongoDB Instances, so we don't need to connect to the database
		if (process.env.NODE_ENV !== ENVIRONMENTS.TEST) {
			console.log('Connecting to Mongo ... ');
			const database: MyDatabaseI = container.get(DATABASE_IDENTIFIER.MYDATABASE);
			database.connect(error => {
				if (error) {
					console.log(error);
					throw error;
				} else {
					// Run Seeds
					console.log('Running Seeds');
					// configSeeder();
					console.log('Server Ready');
				}
			});
		}

		this.server = new InversifyExpressServer(container, undefined, {
			rootPath: '/',
		});
		this.server.setConfig(app => {
			// Add security configuration
			secureApp(app);

			// Add public folder
			app.use(express.static(`${root}/public`));

			// Add response time support
			// This will add x-response-time to the response headers
			app.use(responseTime({ suffix: false }));

			// Add partial response support
			app.use(partialResponse());

			// Add logging configuration
			configLogging(app);

			// Add metrics configuration
			configMetrics(app);

			// Configure Healthchecks
			configHealthChecks(app);

			// Add Compression support
			addCompression(app);

			// Add swagger support
			swaggerify(app);
		});

		this.server.setErrorConfig(app => {
			app.use((err, req: Request, res: Response, next) => {
				console.log(err);
				return next(err);
			});
		});
	}

	public getServer = (): InversifyExpressServer => {
		return this.server;
	};
}
