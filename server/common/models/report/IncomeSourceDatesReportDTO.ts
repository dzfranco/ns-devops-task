import { ObjectType, Field, Float, Int } from 'type-graphql';
@ObjectType()
export class IncomeSourceDatesReportDTO {
	@Field(type => Int)
	month: number;
	@Field(type => Int)
	year: number;
	@Field(type => String)
	date: Date;
	@Field(type => Float)
	adjustedIncome: number;
	@Field(type => Float)
	grossIncome: number;
	@Field(type => Float)
	taxes: number;
}
