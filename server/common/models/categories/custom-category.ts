import { Collection, Instance, ObjectID, Property, Changes, toObjectID } from 'iridium';

import { Field, ID, ObjectType, Float } from 'type-graphql';

import { plainToClass, Transform as FieldTransform, Type } from 'class-transformer';

import { CustomSubCategory } from '../subcategory';
import { MonthlyExpenseCategoryDTO } from './monthly-expense-category';
import { ICustomCategory } from './icustom-category';
import { ObjectId } from 'mongodb';

@ObjectType({ implements: ICustomCategory })
export class CustomCategoryDTO implements ICustomCategory {
	@Field()
	@FieldTransform((value: string) => toObjectID(value), { toClassOnly: true })
	@Type(() => String)
	public _id: ObjectId;
	@Field()
	@FieldTransform((value: string) => toObjectID(value), { toClassOnly: true })
	@Type(() => String)
	public user: ObjectId;
	@Field(() => String)
	public name: string;
	public active: boolean;
	public type: string;
	@Field(() => Float)
	public total?: number;
	public createdAt: Date;
	public updatedAt: Date;
}

@ObjectType({ implements: ICustomCategory })
@Collection('custom_categories')
export class CustomCategory extends Instance<ICustomCategory, CustomCategory> implements ICustomCategory {
	public static onCreating(document: ICustomCategory) {
		document.createdAt = new Date();
		document.updatedAt = new Date();
		document.active = true;
	}

	public static onSaving(instance: CustomCategory, changes: Changes) {
		changes.$set.updatedAt = new Date();
	}

	@ObjectID
	public _id: string;
	@ObjectID
	public user: string;
	@Property(String)
	public name: string;
	@Property(Boolean)
	public active: boolean;
	@Property(String)
	public type: string;
	@Property(Date)
	public createdAt: Date;
	@Property(Date)
	public updatedAt: Date;

	public subcategories?: CustomSubCategory[] | string[];

	public toDTO() {
		const jsonified = this.toJSON();
		jsonified._id = this._id.toString();
		jsonified.user = this.user.toString();
		jsonified.customCategories = [];
		return plainToClass(CustomCategoryDTO, jsonified as CustomCategoryDTO);
	}

	public toMonthlyDTO() {
		const jsonified = this.toJSON();
		jsonified._id = this._id.toString();
		jsonified.user = this.user.toString();
		jsonified.customCategories = [];
		return plainToClass(MonthlyExpenseCategoryDTO, jsonified as MonthlyExpenseCategoryDTO);
	}
}
