import { Core, Model } from 'iridium';
import { User } from '../models/user/user.model';
import { IUser } from '../models/user/iuser';

export interface MyDatabaseI extends Core {
	User: Model<IUser, User>;
}
