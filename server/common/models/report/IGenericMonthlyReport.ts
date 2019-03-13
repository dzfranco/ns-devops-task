import { Field, Float, Int, InterfaceType } from 'type-graphql';
@InterfaceType()
export abstract class IGenericMonthlyReport {
	@Field(type => Int)
	month: number;
	@Field(type => Int)
	year: number;
	@Field(type => String)
	date: Date;
	@Field(type => Float)
	totalSpent: number;
}
