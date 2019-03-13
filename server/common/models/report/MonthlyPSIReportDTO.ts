import { ObjectType, Field, Float } from 'type-graphql';
import { IGenericMonthlyReport } from './IGenericMonthlyReport';
@ObjectType({ implements: IGenericMonthlyReport })
export class MonthlyPSIReportDTO implements IGenericMonthlyReport {
	public month: number;
	public year: number;
	public date: Date;
	public totalSpent: number;
	@Field(type => Float)
	public daily: number;
	@Field(type => Float)
	public monthly: number;
	@Field(type => Float)
	public adjustedIncome: number;
	@Field(type => Float)
	public grossIncome: number;
	@Field(type => Float)
	public taxes: number;
	@Field(type => Float)
	public psi: number;
}
