import { Collection, Instance, ObjectID, Property, Transform, Changes, toObjectID } from 'iridium';

import { InterfaceType, Field, ID, ObjectType, Float, Int } from 'type-graphql';

import { plainToClass, Transform as FieldTransform, Type } from 'class-transformer';

import { ObjectId } from 'mongodb';

@InterfaceType()
export abstract class IMonthlyExpense {
	public _id?: string | ObjectId | any;
	public user: string | ObjectId;
	public customCategory: string | ObjectId;
	@Field(type => String)
	public name: string;
	@Field(type => String)
	public date: Date;
	@Field(type => String)
	public timezone?: string;
	@Field(type => Float)
	public amount: number;
	@Field(type => String)
	public currency: string;
	@Field(type => Boolean)
	public active: boolean;
	@Field(type => Date)
	public createdAt: Date;
	@Field(type => Date)
	public updatedAt: Date;
	public hasCarriedOver?: boolean;
}

@ObjectType({ implements: IMonthlyExpense })
export class MonthlyExpenseDTO extends IMonthlyExpense {
	@Type(() => String)
	@FieldTransform((value: string) => toObjectID(value), { toClassOnly: true })
	@Field()
	public _id: ObjectId;
	@Type(() => String)
	@FieldTransform((value: string) => toObjectID(value), { toClassOnly: true })
	@Field()
	public user: ObjectId;
	@Type(() => String)
	@FieldTransform((value: string) => toObjectID(value), { toClassOnly: true })
	@Field()
	public customCategory: ObjectId;
	public name: string;
	public amount: number;
	public date: Date;
	public currency: string;
	public createdAt: Date;
	public updatedAt: Date;
}
@ObjectType({ implements: IMonthlyExpense })
@Collection('monthly_expenses')
export class MonthlyExpense extends Instance<IMonthlyExpense, MonthlyExpense> implements IMonthlyExpense {
	public static onCreating(doc: MonthlyExpense) {
		doc.createdAt = new Date();
		doc.updatedAt = new Date();
	}

	public static onSaving(doc: MonthlyExpense, changes: Changes) {
		changes.$set.updatedAt = new Date();
	}

	@ObjectID
	public _id: string;
	@ObjectID
	public user: string;
	@ObjectID
	public customCategory: string;
	@Property(String)
	public name: string;
	@Property(Number)
	public amount: number;
	@Property(String)
	public currency: string;
	@Property(Boolean)
	public active: boolean;
	@Property(Boolean)
	public hasCarriedOver: boolean;
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
	@Property(String)
	public timezone?: string;
	@Property(Date)
	public createdAt: Date;
	@Property(Date)
	public updatedAt: Date;

	public toDTO() {
		const jsonified = this.toJSON();
		jsonified._id = this._id.toString();
		jsonified.user = this.user.toString();
		jsonified.customCategory = this.customCategory ? this.customCategory.toString() : null;
		return plainToClass(MonthlyExpenseDTO, jsonified as MonthlyExpenseDTO);
	}
}
