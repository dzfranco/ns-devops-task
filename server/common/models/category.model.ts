import { Collection, Instance, ObjectID, Property } from 'iridium';

import { InterfaceType, Field, ID, ObjectType } from 'type-graphql';

import { BSONType } from 'iridium/dist/lib/BSON';

@InterfaceType()
export abstract class ICategory {
	@Field(type => ID)
	_id?: string | BSONType | any;
	@Field(type => String)
	name: string;
	@Field(type => String)
	type: string;
	@Field(type => [String])
	subcategories: String[]; 
}

@ObjectType({ implements: ICategory })
@Collection('categories')
export class Category extends Instance<ICategory, Category> implements ICategory {
	@ObjectID
	_id: string;
	@Property(String)
	name: string;
	@Property(String)
	type: string;
	@Property([String])
	subcategories: String[];
}
