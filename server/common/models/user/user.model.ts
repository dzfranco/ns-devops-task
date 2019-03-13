import { Instance, ObjectID, Collection, Property, Changes } from 'iridium';
import { plainToClass } from 'class-transformer';
import { UserDTO } from './user.dto';
import { IUser } from './iuser';
import { RedactedUserDTO } from './redacted-user';

@Collection('users')
export class User extends Instance<IUser, User> implements IUser {
	public static onCreating(doc: User) {
		doc.createdAt = new Date();
		doc.updatedAt = new Date();
	}

	public static onSaving(user: User, changes: Changes) {
		changes.$set.updatedAt = new Date();
	}

	@ObjectID
	public _id: string;
	@Property(String)
	public awsId: string;
	@Property(String)
	public email: string;
	@Property(String, false)
	public name: string;
	@Property(String, false)
	public nickname?: string;
	@Property(Number, false)
	public age?: number;
	@Property(String, false)
	public sex?: string;
	@Property(String, false)
	public maritalStatus?: string;
	@Property(String, false)
	public occupation?: string;
	@Property(String, false)
	public zip?: string;
	@Property(String, false)
	public providerName?: string;
	@Property(Date, false)
	public updatedAt: Date;
	@Property(Date, false)
	public createdAt: Date;

	public toRedatedUserDTO(): RedactedUserDTO {
		const redactedUser = new RedactedUserDTO();
		redactedUser._id = this._id.toString();
		redactedUser.$name = this.name;
		redactedUser.$nickname = this.nickname;
		redactedUser.$sex = this.sex;
		redactedUser.$occupation = this.occupation;
		redactedUser.redactMonthlyIncome(this.monthlyIncome);
		redactedUser.redactAgeRange(this.age);
		return redactedUser;
	}

	public toDTO() {
		const jsonified = this.toJSON();
		jsonified.createdAt = this.createdAt;
		jsonified.updatedAt = this.updatedAt;
		jsonified._id = this._id.toString();
		return plainToClass(UserDTO, jsonified as UserDTO);
	}
}
