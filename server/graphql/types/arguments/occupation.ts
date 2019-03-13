import { ArgsType, Field, Int } from 'type-graphql';
import { IsOptional, IsPositive, Min, Max, IsIn } from 'class-validator';
import { LOCALES_ARRAY } from '../../../common/constants/locales';

@ArgsType()
export class GetOccupationArgs {
	@IsOptional()
	@Field(type => String, { nullable: true })
	public query: string;
	@IsOptional()
	@IsIn(LOCALES_ARRAY)
	@Field(type => String, { nullable: true })
	public locale: string;
	@IsPositive()
	@Min(1)
	@Field(type => Int)
	public page: number;
	@IsPositive()
	@Max(20)
	@Field(type => Int)
	public limit: number;
}
