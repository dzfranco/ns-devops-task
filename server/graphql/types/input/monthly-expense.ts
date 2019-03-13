import { InputType, Field, Float, Int } from 'type-graphql';

import { IsPositive, IsDateString, IsIn, Matches, IsOptional } from 'class-validator';

import { IMonthlyExpenseFilters } from '../queries/imonthly-expense.query';
import { CURRENCIES_ISO_CODES } from '../../../common/constants/currencies';
import { VALIDATION_CONSTANTS } from '../../../common/constants/validation';
import { IMonthlyExpense } from '../../../common/models/monthly-expense.model';
import { listTimeZones } from 'timezone-support';

@InputType({ description: 'Create a new Monthly Expense' })
export class MonthlyExpenseInput implements Partial<IMonthlyExpense> {
	@Field(() => String)
	public customCategory: string;
	@Field(() => String)
	public name: string;
	@IsPositive()
	@Field(() => Float)
	public amount: number;
	@Field(() => Int, { nullable: true })
	public dayOfCharge: number;
	@IsDateString()
	@Field(() => String, { nullable: true })
	public date: Date;
	@IsIn(CURRENCIES_ISO_CODES, { message: 'Currency should be in one of the ISO 4217 codes' })
	@Field(() => String, { nullable: true })
	public currency: string;
}
@InputType({ description: 'Register a new User from AWS' })
export class EditMonthlyExpenseInput implements Partial<IMonthlyExpense> {
	@Matches(VALIDATION_CONSTANTS.OBJECT_ID, { message: '_id should be a valid ObjectId' })
	@Field(() => String)
	public _id: string;
	@Field(() => String, { nullable: true })
	public customCategory: string;
	@Field(() => String, { nullable: true })
	public name: string;
	@IsPositive()
	@Field(() => Float, { nullable: true })
	public amount: number;
	@Field(() => Int, { nullable: true })
	public dayOfCharge: number;
	@IsDateString()
	@Field(() => String, { nullable: true })
	public date: Date;
	@IsOptional()
	@IsIn(CURRENCIES_ISO_CODES, { message: 'Currency should be in one of the ISO 4217 codes' })
	@Field(() => String, { nullable: true })
	public currency: string;
	@Field(() => Boolean, { nullable: true })
	public active: boolean;
	public user: string;
	public createdAt: Date;
	public updatedAt: Date;
}

@InputType({ description: 'Query filters for Monthly Expenses' })
export class MonthlyExpenseFilters implements IMonthlyExpenseFilters {
	@IsDateString()
	@Field(() => String, { nullable: true })
	public startDate: Date;
	@IsDateString()
	@Field(() => String, { nullable: true })
	public endDate: Date;
	@Field(() => String, { nullable: true })
	public customCategory: string;
	@Field(() => String, { nullable: true })
	public user: string;
}

@InputType({ description: 'Query filters for Monthly Expenses While Embedded in a Category' })
export class EmbeddedMonthlyExpenseFilters implements IMonthlyExpenseFilters {
	@IsDateString()
	@Field(() => String, { nullable: true })
	public startDate: Date;
	@IsDateString()
	@Field(() => String, { nullable: true })
	public endDate: Date;
	public customCategory: string;
	public user: string;
	@IsOptional()
	@IsIn(listTimeZones())
	@Field(() => String, { nullable: true })
	public timezone: string;
}
