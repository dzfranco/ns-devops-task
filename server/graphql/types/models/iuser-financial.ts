import { InterfaceType, Field, Float, ObjectType } from 'type-graphql';

@InterfaceType()
export abstract class IUserFinancial {
	@Field(type => Float)
	private dayRecurringExpenses: number;
	@Field(type => Float)
	private totalSpentToday: number;
	@Field(type => Float)
	private monthlyIncome: number;
	@Field(type => Float)
	private dailyBudget: number;
	@Field(type => Float)
	private monthlyExpenses: number;
	@Field(type => String)
	private user: string;
}
