import * as _ from 'lodash';

import { injectable, inject } from 'inversify';

import { User } from '../../common/models/user/user.model';
import { IUserPersistence } from '../interfaces/persistence/iuser.persistence';
import IUserService from '../interfaces/service/iuser';
import { PERSISTENCE_IDENTIFIERS } from '../../common/constants/identifiers';

/**
 * User Service for User Identity and Authentication
 * Placeholder implementation
 */
@injectable()
class UserService implements IUserService {
	private userPersistence: IUserPersistence;
	constructor(@inject(PERSISTENCE_IDENTIFIERS.USER) userPersistence: IUserPersistence) {
		this.userPersistence = userPersistence;
	}

	public async getAll() {
		const users: User[] = await this.userPersistence.getAll();
		return users;
	}

	/**
	 * @description Gets a user given its id
	 * @param userId
	 */
	public async getUserById(userId: string): Promise<User> {
		const foundUser = this.userPersistence.getUserById(userId);
		return foundUser;
	}

	/**
	 * @description Gets the user info using the AWS ID
	 * @param {string} awsId - ID Given by AWS Cognito
	 */
	public async getUserByAWSId(awsId: string): Promise<User> {
		const foundUser = await this.userPersistence.getByAWSId(awsId);
		return foundUser;
	}
}

export default UserService;
