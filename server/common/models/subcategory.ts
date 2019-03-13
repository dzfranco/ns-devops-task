import { Collection, Instance, ObjectID, Property } from 'iridium';

import { InterfaceType, Field, ID, ObjectType } from 'type-graphql';

import { BSONType } from 'iridium/dist/lib/BSON';
import { plainToClass } from 'class-transformer';

@InterfaceType()
export abstract class ICustomSubCategory {
	@Field(type => ID)
	_id?: string | BSONType | any;
	@Field(type => String)
	user: string | BSONType | any;
	@Field(type => String)
	category: string | BSONType | any;
	@Field(type => String)
	name: string;
}

@ObjectType({ implements: ICustomSubCategory })
export class CustomSubCategoryDTO implements ICustomSubCategory {
	_id: string;
	user: string;
	category: string;
	name: string;
}
@ObjectType({ implements: ICustomSubCategory })
@Collection('custom_subcategory')
export class CustomSubCategory extends Instance<ICustomSubCategory, CustomSubCategory> implements ICustomSubCategory {
	@ObjectID
	_id: string;
	@ObjectID
	user: string;
	@ObjectID
	category: string;
	@Property(String)
	name: string;

	public toDTO() {
		const jsonified = this.toJSON();
		jsonified._id = this._id.toString();
		jsonified.user = this.user.toString();
		jsonified.category = this.category.toString();
		return plainToClass(CustomSubCategoryDTO, jsonified);
	}
}
