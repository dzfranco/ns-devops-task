import { ArgsType, Field } from 'type-graphql';
import { IsDate, IsDateString, Matches, IsMongoId, IsOptional } from 'class-validator';
import { MonthlyExpense } from '../../../common/models/monthly-expense.model';

@ArgsType()
export class IMonthlyExpenseFilters implements Partial<MonthlyExpense> {
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
	@Field(type => Boolean, { nullable: true })
	public forceActive?: boolean;

	// Fields not used in graphql
	public hasCarriedOver?: boolean;
}
