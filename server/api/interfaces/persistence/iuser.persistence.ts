import { User } from '../../../common/models/user/user.model';

export interface IBaseAWSUser {
	awsId: string;
	email: string;
	name: string;
}

export interface IProviderAWSUser extends IBaseAWSUser {
	providerName: string;
}

export interface IUserPersistence {
	getAll(): Promise<User[]>;
	getUserById(userId: string): Promise<User>;
	getByAWSId(awsId: string): Promise<User>;
}
