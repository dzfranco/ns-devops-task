import { Instance, Property, Collection, Changes, Transform, ObjectID, toObjectID } from 'iridium';

import { ObjectID as ObjectId } from 'mongodb';

import { InterfaceType, ObjectType, Field, Float, ID } from 'type-graphql';

import { plainToClass, Transform as FieldTransform, Type } from 'class-transformer';

import { BSONType } from 'iridium/dist/lib/BSON';
import { CustomCategoryDTO } from './categories/custom-category';

@InterfaceType()
export abstract class IDailyTransaction {
	public _id?: ObjectId | string;
	public user: ObjectId | string;
	@Field(type => Float, { nullable: true })
	public amount?: number;
	@Field(type => String, { nullable: true })
	public currency?: string;
	@Field(type => String, { nullable: true })
	public payee?: string;
	public customCategory?: ObjectId | string;
	@Field(type => String, { nullable: true })
	public note?: string;
	@Field(type => Date, { nullable: true })
	public date?: Date;
	@Field(type => String, { nullable: true })
	public pictureUrl?: string;
	@Field(type => Date)
	public createdAt: Date;
	@Field(type => Date)
	public updatedAt: Date;
}
@ObjectType({ implements: IDailyTransaction })
export class DailyTransactionDTO {
	@Field()
	@FieldTransform((value: string) => toObjectID(value), { toClassOnly: true })
	@Type(() => String)
	public _id?: ObjectId;
	@Field()
	@FieldTransform((value: string) => toObjectID(value), { toClassOnly: true })
	@Type(() => String)
	public user: ObjectId;
	public amount?: number;
	public currency?: string;
	public payee?: string;
	@Field()
	@FieldTransform((value: string) => toObjectID(value), { toClassOnly: true })
	@Type(() => String)
	public customCategory?: ObjectId;
	public note?: string;
	public pictureUrl?: string;
	public date?: Date;
	public createdAt: Date;
	public updatedAt: Date;
}

@ObjectType({ implements: IDailyTransaction })
export class DailyTransactionPopulatedDTO {
	@Field()
	@FieldTransform((value: string) => toObjectID(value), { toClassOnly: true })
	@Type(() => String)
	public _id?: ObjectId;
	@Field()
	@FieldTransform((value: string) => toObjectID(value), { toClassOnly: true })
	@Type(() => String)
	public user: ObjectId;
	public amount?: number;
	public currency?: string;
	public payee?: string;
	@Field(() => CustomCategoryDTO)
	@Type(() => CustomCategoryDTO)
	public customCategory?: CustomCategoryDTO;
	@FieldTransform((value: string) => toObjectID(value), { toClassOnly: true })
	@Type(() => String)
	public customCategoryId?: ObjectId;
	public note?: string;
	public pictureUrl?: string;
	public date?: Date;
	public createdAt: Date;
	public updatedAt: Date;
}

@Collection('daily_transactions')
export class DailyTransaction extends Instance<IDailyTransaction, DailyTransaction> implements IDailyTransaction {
	public static onCreating(doc: DailyTransaction) {
		doc.createdAt = new Date();
		doc.updatedAt = new Date();
	}

	public static onSaving(doc: DailyTransaction, changes: Changes) {
		changes.$set.updatedAt = new Date();
	}

	@ObjectID
	public _id: string;
	@ObjectID
	public user: string;
	@Property(Number, false)
	public amount: number;
	@Property(String, false)
	public payee: string;
	@ObjectID
	public customCategory: string;
	@Property(String, false)
	public note: string;
	@Property(String, false)
	public pictureUrl: string;
	@Property(String, false)
	public currency: string;

	@Transform(
		fromDB => {
			console.log(fromDB);
			return fromDB;
		},
		toDB => {
			if (typeof toDB === 'object') {
				return toDB;
			}
			return new Date(toDB);
		}
	)
	@Property(Date)
	public date: Date;
	@Property(Date)
	public createdAt: Date;
	@Property(Date)
	public updatedAt: Date;

	public toPopulatedDTO(): DailyTransactionPopulatedDTO {
		const jsonified = this.toJSON();
		jsonified.customCategoryId = this.customCategory;
		jsonified.customCategory = null;
		return plainToClass(DailyTransactionPopulatedDTO, jsonified as DailyTransactionPopulatedDTO);
	}

	public toDTO(): DailyTransactionDTO {
		const jsonified = this.toJSON();
		return plainToClass(DailyTransactionDTO, jsonified as DailyTransactionDTO);
	}
}
