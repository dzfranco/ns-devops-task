import { InputType, Field, Int, Float } from 'type-graphql';

import { IsIn, IsDateString, IsOptional, IsPositive, Min, Validate } from 'class-validator';

import { IDailyTransaction } from '../../../common/models/daily-transaction.model';
import { CURRENCIES_ISO_CODES } from '../../../common/constants/currencies';
import { listTimeZones } from 'timezone-support';
import { ObjectId } from 'mongodb';
import { AndConstraint } from '../../../common/validators/and';

@InputType({ description: 'Query a daily transaction by date' })
export class DayTransactionsInput implements Partial<IDailyTransaction> {
	@Field(type => ObjectId, { nullable: true })
	public user: ObjectId;
	@IsOptional()
	@IsDateString()
	@Field(type => String, { nullable: true })
	public date: Date;
	@Min(1)
	@Field(type => Int)
	public page: number;
	@Min(5)
	@Field(type => Int)
	public limit: number;
	@IsOptional()
	@IsIn(listTimeZones())
	@Field(type => String, { nullable: true })
	public timezone: string;
}
@InputType({ description: 'Query The date of spending' })
export class TodaysSpendingInput implements Partial<IDailyTransaction> {
	@IsDateString()
	@Field(type => Date)
	public date: Date;
	@IsOptional()
	@IsIn(listTimeZones())
	@Field(type => String, { nullable: true })
	public timezone: string;
}

@InputType({ description: 'Create a new Daily transaction' })
export class NewTransactionInput implements Partial<IDailyTransaction> {
	@Field(type => Float, { nullable: true })
	public amount: number;
	@Field(type => String, { nullable: true })
	public payee: string;
	@IsDateString()
	@Field(type => String)
	public date: Date;
	@Field(type => String, { nullable: true })
	public note: string;
	@Field(type => String, { nullable: true })
	public customCategory: string;
	@IsOptional()
	@IsIn(CURRENCIES_ISO_CODES)
	@Field(type => String, { nullable: true })
	public currency: string;
	@IsIn(listTimeZones())
	@Field(type => String, { nullable: true })
	public timezone?: string;
}
@InputType({ description: 'Edit a Daily transaction' })
export class EditTransactionInput implements Partial<IDailyTransaction> {
	@Field(type => Float, { nullable: true })
	public amount: number;
	@Field(type => String, { nullable: true })
	public payee: string;
	@Validate(AndConstraint, ['timezone'])
	@IsOptional()
	@IsDateString()
	@Field(type => String, { nullable: true })
	public date: Date;
	@Field(type => String, { nullable: true })
	public note: string;
	@Field(type => String)
	public customCategory: string;
	@IsOptional()
	@IsIn(CURRENCIES_ISO_CODES)
	@Field(type => String, { nullable: true })
	public currency: string;
	@Validate(AndConstraint, ['date'])
	@IsIn(listTimeZones())
	@Field(type => String, { nullable: true })
	public timezone?: string;
}
