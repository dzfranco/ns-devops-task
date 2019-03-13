import { ArgsType, Int, Field } from 'type-graphql';

import { Min, Max, IsOptional, IsDateString, IsIn, Matches } from 'class-validator';
import { CURRENCIES_ISO_CODES } from '../../../common/constants/currencies';
import { VALIDATION_CONSTANTS } from '../../../common/constants/validation';

@ArgsType()
export class GetSingleFriendArgs {
	@Matches(VALIDATION_CONSTANTS.OBJECT_ID, { message: '_id should be a valid ObjectId' })
	@Field(type => String)
	public _id: string;
}

@ArgsType()
export class GetFriendListArgs {
	@Field(type => Int)
	@Min(5)
	@Max(50)
	public limit: number;
	@Field(type => Int)
	@Min(1)
	public page: number;
	@Field(type => String, { nullable: true })
	public searchTerm: string;
}
