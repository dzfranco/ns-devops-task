import { RegisterUserInput, OnboardingUserInput } from '../../../graphql/types/input/user';
import { User } from '../../../common/models/user/user.model';
import { IAWSIdentityToken } from '../external/iawstoken';
import { RangeFieldInt } from '../../../common/models/helpers/range-int';
import { UserDTO } from '../../../common/models/user/user.dto';

/**
 * User Service Interface
 */
interface IUserService {
	// Get User by ID
	getUserById(userId: string): Promise<User>;

	// Get User By AWS Id
	getUserByAWSId(awsId: string): Promise<User>;

	// Get all users
	getAll(): Promise<User[]>;

	// Validated Email and Password
	validateEmailAndPassword(email, password): boolean;

	// Get User ID for email
	findUserIdForEmail(email): string;

	// Register a user from cognito
	registerAwsUser(parsedAwsData: IAWSIdentityToken): Promise<User>;

	// Modify an aws USer
	setUserData(awsId: string, userChanges: RegisterUserInput);

	// Modify an aws USer
	userOnboarding(awsId: string, userChanges: OnboardingUserInput): Promise<User>;

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

export default IUserService;
