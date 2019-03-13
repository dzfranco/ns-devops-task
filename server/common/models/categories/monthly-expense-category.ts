import { ObjectType, Field, Float } from 'type-graphql';
import { ObjectID } from 'mongodb';
import { MonthlyExpenseDTO } from '../monthly-expense.model';
import { Type, Transform } from 'class-transformer';
import { toObjectID } from 'iridium';
import { ICustomCategory } from './icustom-category';

@ObjectType({ implements: ICustomCategory })
export class MonthlyExpenseCategoryDTO implements ICustomCategory {
	@Type(() => String)
	@Transform((value: string) => toObjectID(value), { toClassOnly: true })
	@Field()
	public _id: ObjectID;
	@Type(() => String)
	@Transform((value: string) => toObjectID(value), { toClassOnly: true })
	@Field()
	public user: ObjectID;
	public name: string;
	public active: boolean;
	public type: string;
	@Field(type => Float)
	public total?: number;
	@Type(() => MonthlyExpenseDTO)
	@Field(type => [MonthlyExpenseDTO], { nullable: true })
	public monthlyExpenses: MonthlyExpenseDTO[];
	public createdAt: Date;
	public updatedAt: Date;
}
