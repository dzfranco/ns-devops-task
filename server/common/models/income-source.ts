import { Collection, Instance, ObjectID, Property, Transform, Changes } from 'iridium';

import { Field, Float, ID, Int, InterfaceType, ObjectType } from 'type-graphql';

import { plainToClass } from 'class-transformer';

import { BSONType } from 'iridium/dist/lib/BSON';

@InterfaceType()
export abstract class IIncomeSource {
	@Field(type => ID)
	public _id?: string | BSONType | any;
	@Field(type => String)
	public user: string;
	@Field(type => String)
	public customCategory: string;
	@Field(type => String)
	public name: string;
	@Field(type => Float)
	public amount: number;
	@Field(type => String)
	public currency: string;
	@Field(type => Int)
	public taxPercentage: number;
	@Field(type => Boolean)
	public active: boolean;
	@Field(type => Date)
	public date: Date;
	@Field(type => String)
	public timezone: string;
	@Field(type => Date)
	public createdAt: Date;
	@Field(type => Date)
	public updatedAt: Date;
	public hasCarriedOver?: boolean;
}

@ObjectType({ implements: IIncomeSource })
export class IncomeSourceDTO extends IIncomeSource {
	public _id: string;
	public user: string;
	public customCategory: string;
	public name: string;
	public amount: number;
	public currency: string;
	public taxPercentage: number;
	public active: boolean;
	public date: Date;
	public createdAt: Date;
	public updatedAt: Date;
}

@ObjectType({ implements: IIncomeSource })
@Collection('income_sources')
export class IncomeSource extends Instance<IIncomeSource, IncomeSource> implements IIncomeSource {
	public static onCreating(doc: IIncomeSource) {
		doc.createdAt = new Date();
		doc.updatedAt = new Date();
	}

	public static onSaving(doc: IncomeSource, changes: Changes) {
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
	@Property(String)
	public currency: string;
	@Property(Number)
	public amount: number;
	@Property(Boolean)
	public active: boolean;
	@Property(Number)
	public taxPercentage: number;

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
	public timezone: string;
	@Property(Boolean)
	public hasCarriedOver: boolean;
	@Property(Date)
	public createdAt: Date;
	@Property(Date)
	public updatedAt: Date;

	public toDTO(): IncomeSourceDTO {
		const jsonified = this.toJSON();
		jsonified._id = this._id.toString();
		jsonified.user = this.user.toString();
		jsonified.customCategory = this.customCategory ? this.customCategory.toString() : null;
		return plainToClass(IncomeSourceDTO, jsonified as IncomeSourceDTO);
	}
}
