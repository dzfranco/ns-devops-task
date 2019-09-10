import { Core, Model } from 'iridium';

import { MyDatabaseI } from '../interfaces/imongo';
import { IUser } from '../models/user/iuser';
import { User } from '../models/user/user.model';
import { Occupation } from '../models/occupation/occupation.model';
import { IOccupation } from '../models/occupation/ioccupation.model';

export class MyDatabase extends Core implements MyDatabaseI {
	public User = new Model<IUser, User>(this, User);
	public Occupation = new Model<IOccupation, Occupation>(this, Occupation);
}
