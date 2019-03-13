import { User } from '../../../common/models/user/user.model';
import { RegisterUserInput } from '../../../graphql/types/input/user';
import { RangeFieldInt } from '../../../common/models/helpers/range-int';
import { UserDTO } from '../../../common/models/user/user.dto';

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
	registerAwsProviderUser(userData: IProviderAWSUser): Promise<User>;
	setUserData(user: User, userChanges: RegisterUserInput): Promise<User>;
	registerAwsUser(userData: IBaseAWSUser);
	/**
	 * @description Fetches the users with monthly income according to the filters given by the parameters
	 * @param {string} searchTerm - Becomes a regex which will be the basis to search for name and email
	 * @param {string} currency - Currency in ISO 4217 format
	 * @param {RangeFieldInt} incomeFilter - Monthly income filter with min and max range
	 * @param {RangeFieldInt} ageFilter - Age filter with min and max range
	 * @param {number} page - The page number
	 * @param {number} limit - Amount of results per page
	 */
	getUsersWithMonthlyIncome(
		searchTerm: string,
		currency: string,
		incomeFilter: RangeFieldInt,
		ageFilter: RangeFieldInt,
		sort: { field: string; order: number },
		page: number,
		limit: number
	): Promise<UserDTO[]>;
}
