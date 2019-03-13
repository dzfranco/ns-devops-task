import { ObjectType, Field } from 'type-graphql';
import { IActivity } from './activity.model';
import { BSONType } from 'iridium/dist/lib/BSON';
import { Type } from 'class-transformer';
import { DailyTransactionDTO } from '../daily-transaction.model';

@ObjectType({ implements: IActivity })
export class TransactionActivityDTO implements IActivity {
	public _id?: string | BSONType | any;
	@Type(() => String)
	public user: string;
	@Type(() => DailyTransactionDTO)
	@Field(type => DailyTransactionDTO)
	public transaction: DailyTransactionDTO;
	public collectionId: string | BSONType | any;
	public type: string;
	public isFeedable: boolean;
	public createdAt: Date;
	public updatedAt: Date;
}
