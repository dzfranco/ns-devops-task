import { ArgsType, Field, Int } from 'type-graphql';
import { Matches, IsOptional, IsDateString, IsIn, Validate, Min, Max } from 'class-validator';
import { CURRENCIES_ISO_CODES } from '../../../common/constants/currencies';
import { RangeFieldInt } from '../../../common/models/helpers/range-int';
import { AndConstraint } from '../../../common/validators/and';
import { RangeFieldIntInput } from '../input/helpers/range-int';

@ArgsType()
export class RedactedUserSearchArgs {
	@Field(() => String, { nullable: true })
	public searchTerm: string;
	@IsIn(CURRENCIES_ISO_CODES, { message: 'Currency should be in one of the ISO 4217 codes' })
	@Field(() => String, { nullable: true })
	public currency: string;
	@Field(() => Boolean, { nullable: true })
	public isIncomeYearly: boolean;

	@Field(() => RangeFieldIntInput, { nullable: true })
	public incomeFilter: RangeFieldInt;
	@Field(() => RangeFieldIntInput, { nullable: true })
	public ageFilter: RangeFieldInt;
	@IsOptional()
	@Validate(AndConstraint, ['sortOrder'])
	@Field(() => String, { nullable: true })
	public sortField: string;
	@IsOptional()
	@Validate(AndConstraint, ['sortField'])
	@Field(() => Int)
	public sortOrder: string;
	@Field(() => Int)
	@Min(5)
	@Max(50)
	public limit: number;
	@Field(() => Int)
	@Min(1)
	public page: number;
}

@ArgsType()
export class RedactedIncomeSourceFiltersArgs implements Partial<RangeFieldInt> {
	@IsOptional()
	@IsDateString()
	@Field(() => String, { nullable: true })
	public startDate?: Date;
	// End Date Validations
	@IsOptional()
	@IsDateString()
	@Field(() => String, { nullable: true })
	public endDate?: Date;
	@IsIn(CURRENCIES_ISO_CODES, { message: 'Currency should be in one of the ISO 4217 codes' })
	@Field(() => String, { nullable: true })
	public currency: string;

	private min: number;
	private max: number;

	public get $min(): number {
		return this.min;
	}

	public get $max(): number {
		return this.max;
	}

	public set $min(value: number) {
		this.min = value;
	}

	public set $max(value: number) {
		this.max = value;
	}
}
