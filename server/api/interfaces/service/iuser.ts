import { User } from '../../../common/models/user/user.model';

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
}

export default IUserService;
