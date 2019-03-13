import { ArgsType, Int, Field } from 'type-graphql';
import { Min, IsOptional } from 'class-validator';

@ArgsType()
export class GetMonthlyExpenseCategoriesArgs {
	@IsOptional()
	@Field(type => Date, { nullable: true })
	public startDate: Date;
	@IsOptional()
	@Field(type => Date, { nullable: true })
	public endDate: Date;
	@Field(type => Int, { nullable: true })
	@Min(1)
	public page: number;
	@Field(type => Int, { nullable: true })
	@Min(5)
	public limit: number;
}
