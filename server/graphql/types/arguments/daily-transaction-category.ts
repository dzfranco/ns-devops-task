import { ArgsType, Field } from 'type-graphql';
import { IsDateString, IsOptional } from 'class-validator';

@ArgsType()
export class GetDailyTransactionCategoriesArgs {
	@IsOptional()
	@Field(type => Date, { nullable: true })
	public startDate: Date;
	@IsOptional()
	@Field(type => Date, { nullable: true })
	public endDate: Date;
}
