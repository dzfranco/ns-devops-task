import { Container } from 'inversify';

import 'reflect-metadata';

import { ILogger, IMetrics } from '../interfaces';
import { LogService, MetricsService } from '../services';
import { SERVICE_IDENTIFIER, PERSISTENCE_IDENTIFIERS } from '../constants/identifiers';
import LoggerMiddleware from '../middleware/logger-middleware';
import { IUserService } from '../../api/interfaces';
import { UserService } from '../../api/services';
import { UserPersistence } from '../../api/persistence/user';
import { IUserPersistence } from '../../api/interfaces/persistence/iuser.persistence';

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

			/* 
			 * Define service bindings here
			*/
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
