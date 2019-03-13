import { ArgsType, Field } from 'type-graphql';
import { IsDate, IsDateString, Matches, IsMongoId, IsOptional } from 'class-validator';
import { IDailyTransaction } from '../../../common/models/daily-transaction.model';

@ArgsType()
export class IDailyTransactionFilters implements Partial<IDailyTransaction> {
	@IsOptional()
	@IsDateString()
	@Field(type => String, { nullable: true })
	public startDate?: Date;
	@IsOptional()
	@IsDateString()
	@Field(type => String, { nullable: true })
	public endDate?: Date;
	@Field(type => String, { nullable: true })
	@IsOptional()
	@IsMongoId()
	public user?: string;
	@Field(type => String, { nullable: true })
	@IsOptional()
	@IsMongoId()
	public customCategory?: string;
}
