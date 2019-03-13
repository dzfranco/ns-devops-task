import { ObjectID } from 'mongodb';

import { toObjectID } from 'iridium';

import { Field, ObjectType, Float } from 'type-graphql';

import { Transform, Type } from 'class-transformer';

import { DailyTransactionDTO } from '../daily-transaction.model';
import { ICustomCategory } from './icustom-category';

@ObjectType({ implements: ICustomCategory })
export class DailyTransactionCategoryDTO implements ICustomCategory {
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
	@Field(() => Float)
	public total?: number;
	@Type(() => DailyTransactionDTO)
	@Field(() => [DailyTransactionDTO])
	public dailyTransactions: DailyTransactionDTO[];
	public createdAt: Date;
	public updatedAt: Date;
}
