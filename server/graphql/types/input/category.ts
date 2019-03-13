import { InputType, Field, Int } from 'type-graphql';
import { Category } from '../../../common/models/category.model';
import { IsIn } from 'class-validator';

@InputType({ description: 'Get Categories Input' })
export class GetCategoriesInput implements Partial<Category> {
	@IsIn(['daily', 'monthly'])
	@Field(type => String)
	type: string;
	@Field(type => Int)
	page: number;
	@Field(type => Int)
	limit: number;
}
