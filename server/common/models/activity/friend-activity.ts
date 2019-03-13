import { ObjectType, Field } from 'type-graphql';
import { IActivity } from './activity.model';
import { BSONType } from 'iridium/dist/lib/BSON';
import { Type } from 'class-transformer';
import { UserDTO } from '../user/user.dto';
import { RedactedUserDTO } from '../user/redacted-user';

@ObjectType({ implements: IActivity })
export class FriendActivityDTO implements IActivity {
	public _id?: string | BSONType | any;
	@Type(() => UserDTO)
	@Field(type => UserDTO)
	public user: UserDTO;
	@Type(() => RedactedUserDTO)
	@Field(type => RedactedUserDTO)
	public friend: RedactedUserDTO | UserDTO;
	public collectionId: string | BSONType | any;
	public type: string;
	public isFeedable: boolean;
	public createdAt: Date;
	public updatedAt: Date;
}
