import { InterfaceType, Field, ID, Int, Float, GraphQLISODateTime } from 'type-graphql';
import { ObjectId } from 'bson';
import { BSONType } from 'iridium/dist/lib/BSON';

/**
 * User Interface
 */
@InterfaceType()
export abstract class IUser {
	@Field(type => ID)
	public _id?: string | ObjectId | BSONType | any;
	@Field(type => String, { nullable: true })
	public email: string;
	@Field(type => String, { nullable: true })
	public awsId: string;
	@Field(type => String, { nullable: true })
	public name?: string;
	@Field(type => String, { nullable: true })
	public nickname?: string;
	@Field(type => Int, { nullable: true })
	public age?: number;
	@Field(type => String, { nullable: true })
	public sex?: string;
	@Field(type => String, { nullable: true })
	public maritalStatus?: string;
	@Field(type => String, { nullable: true })
	public occupation?: string;
	@Field(type => String, { nullable: true })
	public zip?: string;
	@Field(type => Float, { nullable: true })
	public monthlyIncome?: number;
	@Field(type => String, { nullable: true })
	public providerName?: string;
	@Field(type => GraphQLISODateTime, { nullable: true })
	public createdAt?: Date;
	@Field(type => GraphQLISODateTime, { nullable: true })
	public updatedAt?: Date;
}
