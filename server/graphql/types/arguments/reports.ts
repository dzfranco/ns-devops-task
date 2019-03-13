import { ArgsType, Int, Field } from 'type-graphql';

import { Min, Max, IsOptional, IsDateString, IsIn } from 'class-validator';
import { CURRENCIES_ISO_CODES } from '../../../common/constants/currencies';

@ArgsType()
export class GetPSIReportArgs {
	@Field(type => Int)
	@Min(2010)
	year: number;
}
@ArgsType()
export class GetOverviewReportArgs {
	@Field(type => Int)
	@Min(2010)
	year: number;
	@Min(1)
	@Max(12)
	@Field(type => Int)
	month: number;
}

@ArgsType()
export class GetReportByCategoriesArgs {
	@IsOptional()
	@IsDateString()
	@Field(type => String)
	startDate?: Date;
	@IsOptional()
	@IsDateString()
	@Field(type => String)
	endDate?: Date;
	@IsOptional()
	@IsIn(CURRENCIES_ISO_CODES, { message: 'Currency should be in one of the ISO 4217 codes' })
	@Field(type => String, { nullable: true })
	currency: string;

	// Not Input fields, but needed otherwise
	user: string;
}
