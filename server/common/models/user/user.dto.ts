import { ObjectType, Field } from 'type-graphql';
import { ObjectId } from 'bson';
import { BSONType } from 'iridium/dist/lib/BSON';
import { IUser } from './iuser';
import { RedactedUserDTO } from './redacted-user';
import { RangeFieldInt } from '../helpers/range-int';

@ObjectType({ implements: IUser })
export class UserDTO {
	public _id?: string | ObjectId | BSONType | any;
	public email: string;
	public awsId: string;
	public name?: string;
	public nickname?: string;
	public age?: number;
	public sex?: string;
	public maritalStatus?: string;
	public occupation?: string;
	public zip?: string;
	public monthlyIncome?: number;
	public providerName?: string;
	public createdAt?: Date;
	public updatedAt?: Date;

	public toRedatedUserDTO(): RedactedUserDTO {
		const redactedUser = new RedactedUserDTO();
		redactedUser._id = this._id;
		redactedUser.$name = this.name;
		redactedUser.$nickname = this.nickname;
		redactedUser.$sex = this.sex;
		redactedUser.$occupation = this.occupation;
		redactedUser.redactMonthlyIncome(this.monthlyIncome);
		redactedUser.redactAgeRange(this.age);
		return redactedUser;
	}
}
