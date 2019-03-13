import { InputType, Field, Int, Float, ArgsType } from 'type-graphql';

import { IsIn, IsDateString, IsPositive, Matches, IsInt, IsOptional, Min, Max } from 'class-validator';

import { CURRENCIES_ISO_CODES } from '../../../common/constants/currencies';
import { VALIDATION_CONSTANTS } from '../../../common/constants/validation';
import { IIncomeSource } from '../../../common/models/income-source';

@ArgsType()
export class IncomeSourceFilters implements Partial<IIncomeSource> {
	@Matches(VALIDATION_CONSTANTS.OBJECT_ID, { message: 'Custom Category should be a valid ObjectId' })
	@Field(() => String, { nullable: true })
	public customCategory?: string;
	@IsIn(CURRENCIES_ISO_CODES, { message: 'Currency should be in one of the ISO 4217 codes' })
	@Field(() => String, { nullable: true })
	public currency?: string;
	@IsOptional()
	@IsDateString()
	@Field(() => String, { nullable: true })
	public startDate?: Date;
	// End Date Validations
	@IsOptional()
	@IsDateString()
	@Field(() => String, { nullable: true })
	public endDate?: Date;
	public active?: boolean = true;
	public user?: string;
	public forceActive?: boolean;
}

@InputType({ description: 'New Income Source' })
export class NewIncomeSourceInput implements Partial<IIncomeSource> {
	@Matches(VALIDATION_CONSTANTS.OBJECT_ID, { message: 'Custom Category should be a valid ObjectId' })
	@Field(() => String)
	public customCategory: string;
	@Field(() => String)
	public name: string;
	@IsPositive()
	@Field(() => Float)
	public amount: number;
	@IsOptional()
	@IsIn(CURRENCIES_ISO_CODES, { message: 'Currency should be in one of the ISO 4217 codes' })
	@Field(() => String, { nullable: true })
	public currency: string;
	@IsOptional()
	@IsPositive()
	@IsInt()
	@Field(() => Int, { nullable: true })
	public taxPercentage: number;
	@Field(() => String)
	public date;
	public user: string;
	public active: boolean;
	public createdAt: Date;
	public updatedAt: Date;
}
@InputType({ description: 'Edit an Input Source' })
export class EditIncomeSourceInput implements Partial<IIncomeSource> {
	@Matches(VALIDATION_CONSTANTS.OBJECT_ID, { message: '_id should be a valid ObjectId' })
	@Field(() => String)
	public _id: string;
	@Matches(VALIDATION_CONSTANTS.OBJECT_ID, { message: 'Custom Category should be a valid ObjectId' })
	@Field(() => String)
	public customCategory: string;
	@Field(() => String)
	public name: string;
	@IsPositive()
	@Field(() => Float)
	public amount: number;
	@IsOptional()
	@IsIn(CURRENCIES_ISO_CODES, { message: 'Currency should be in one of the ISO 4217 codes' })
	@Field(() => String, { nullable: true })
	public currency;
	@IsOptional()
	@Min(0)
	@Max(100)
	@IsInt()
	@Field(() => Int, { nullable: true })
	public taxPercentage: number;
	@IsOptional()
	@IsDateString()
	@Field(() => String, { nullable: true })
	public date;
	public user: string;
	public active: boolean;
	public createdAt: Date;
	public updatedAt: Date;
}

@InputType({ description: 'Disable an input source, requires only the id' })
export class DisableIncomeSourceInput implements Partial<IIncomeSource> {
	@Matches(VALIDATION_CONSTANTS.OBJECT_ID, { message: '_id should be a valid ObjectId' })
	@Field(() => String)
	public _id: string;
	public user: string;
	public customCategory: string;
	public name: string;
	public amount: number;
	public active: boolean;
	public currency: string;
	public taxPercentage: number;
	public date: Date;
}
