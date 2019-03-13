import { ObjectType, Field, Float } from 'type-graphql';
@ObjectType()
export class OverviewReportDTO {
	@Field(type => Float)
	monthly: number;
	@Field(type => Float)
	daily: number;
	@Field(type => Float)
	savingsOrDeficit: number;
	@Field(type => Float)
	income: number;
}
