import * as fs from 'fs';
import { inject, injectable } from 'inversify';

import { ISecurity, JWT_KeyType } from '../interfaces';
import { SERVICE_IDENTIFIER } from '../constants/identifiers';
import ILogger from '../interfaces/ilogger';

/**
 * Security Service
 */
@injectable()
class SecurityService implements ISecurity {
	public loggerService: ILogger;
	// Generated using https://gist.github.com/ygotthilf/baa58da5c3dd1f69fae9
	private RSA_PRIVATE_KEY: any;
	private RSA_PUBLIC_KEY: any;

	public constructor(@inject(SERVICE_IDENTIFIER.LOGGER) loggerService: ILogger) {
		this.loggerService = loggerService;
	}
	public async getKey(keyType: JWT_KeyType) {
		let result: any;
		return result;
	}
}

export default SecurityService;
