import { InputType, Field, Int, Float } from 'type-graphql';

import { IsIn } from 'class-validator';
import { IUser } from '../../../common/models/user/iuser';

@InputType({ description: 'Register a new User from AWS' })
export class RegisterUserInput implements Partial<IUser> {
	@Field()
	public name: string;
	@Field(type => Int)
	public age: number;
	@IsIn(['male', 'female'])
	@Field()
	public sex: string;
	@IsIn(['single', 'married', 'divorced', 'partnered'])
	@Field()
	public maritalStatus: string;
	@Field()
	public zip: string;
	@Field(type => String)
	public occupation: string;
}
@InputType({ description: 'Register a new User from AWS' })
export class OnboardingUserInput implements Partial<IUser> {
	@Field()
	public name: string;
	@Field(type => Float)
	public monthlyIncome: number;
	@Field(type => String, { nullable: true })
	public currency: string;
	@Field(type => Int)
	public age: number;
	@Field(type => String)
	public occupation: string;
	@IsIn(['male', 'female'])
	@Field()
	public sex: string;
	@IsIn(['single', 'married', 'divorced', 'partnered'])
	@Field()
	public maritalStatus: string;
	@Field()
	public zip: string;
}
