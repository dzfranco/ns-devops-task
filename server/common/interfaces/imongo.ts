import { Core, Model } from 'iridium';
import { User } from '../models/user/user.model';
import { IUser } from '../models/user/iuser';
import { IOccupation } from '../models/occupation/ioccupation.model';
import { Occupation } from '../models/occupation/occupation.model';

export interface MyDatabaseI extends Core {
	User: Model<IUser, User>;
	Occupation: Model<IOccupation, Occupation>;
}
