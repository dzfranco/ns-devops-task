import { ArgsType, Field } from 'type-graphql';
import { IsOptional, IsIn, Matches } from 'class-validator';
import { listTimeZones } from 'timezone-support';
import { VALIDATION_CONSTANTS } from '../../../common/constants/validation';
import { ObjectId } from 'mongodb';

@ArgsType()
export class GetUserFinancialsArgs {
	@IsOptional()
	@Field(type => ObjectId, { nullable: true })
	public _id: ObjectId;
}
@ArgsType()
export class GetDailyFinancesArgs {
	@IsOptional()
	@IsIn(listTimeZones())
	@Field(type => String, { nullable: true })
	public timezone: string;
	@IsOptional()
	@Field(type => Date, { nullable: true })
	public date: Date;
}
@ArgsType()
export class GetDailyBudgetArgs {
	@IsOptional()
	@IsIn(listTimeZones())
	@Field(type => String, { nullable: true })
	public timezone: string;
	@IsOptional()
	@Field(type => Date, { nullable: true })
	public date: Date;
}
