import * as _ from 'lodash';
import { injectable, inject } from 'inversify';
import { User } from '../../common/models/user/user.model';
import { IUserPersistence } from '../interfaces/persistence/iuser.persistence';
import { DATABASE_IDENTIFIER } from '../../common/constants/identifiers';
import { MyDatabaseI } from '../../common/interfaces/imongo';
import { toObjectID } from 'iridium';

@injectable()
export class UserPersistence implements IUserPersistence {
	private myDatabase: MyDatabaseI;
	constructor(@inject(DATABASE_IDENTIFIER.MYDATABASE) database: MyDatabaseI) {
		this.myDatabase = database;
	}

	public async getUserById(userId: string): Promise<User> {
		const foundUser = await this.myDatabase.User.findOne({ _id: toObjectID(userId) });
		return foundUser;
	}

	public async getByAWSId(awsId: string): Promise<User> {
		const user: User = await this.myDatabase.User.findOne({ awsId });
		return user;
	}

	public async getAll(): Promise<User[]> {
		const users: User[] = await this.myDatabase.User.find().toArray();
		return users;
	}
}
