import { Core, Model } from 'iridium';

import { MyDatabaseI } from '../interfaces/imongo';
import { IUser } from '../models/user/iuser';
import { User } from '../models/user/user.model';

export class MyDatabase extends Core implements MyDatabaseI {
	public User = new Model<IUser, User>(this, User);
}
