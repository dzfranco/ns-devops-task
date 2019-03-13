import { InputType, Field } from 'type-graphql';
import { IsIn } from 'class-validator';
import { CustomCategory } from '../../../common/models/categories/custom-category';
import { BASE_CATEGTORY_TYPES } from '../../../common/constants/base-categories';

@InputType({ description: 'Add Custom Category Input' })
export class CustomCategoryInput implements Partial<CustomCategory> {
	@IsIn([BASE_CATEGTORY_TYPES.DAILY, BASE_CATEGTORY_TYPES.MONTHLY, BASE_CATEGTORY_TYPES.INCOME])
	@Field(() => String)
	public type: string;
	@Field(() => String)
	public name: string;
	@Field(() => [String], { nullable: true })
	public subcategories: string[];
}
@InputType({ description: 'Add Custom Category Input' })
export class CustomCategoryWithID extends CustomCategoryInput {
	@Field(() => String)
	public _id: string;
}

@InputType({ description: 'Get Custom Categories Input' })
export class GetCustomCategoryInput implements Partial<CustomCategory> {
	@IsIn([BASE_CATEGTORY_TYPES.DAILY, BASE_CATEGTORY_TYPES.MONTHLY, BASE_CATEGTORY_TYPES.INCOME])
	@Field(() => String)
	public type: string;
}
