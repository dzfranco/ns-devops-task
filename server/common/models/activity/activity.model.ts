import { Collection, Instance, ObjectID, Property, Changes } from 'iridium';

import { InterfaceType, Field, ID, ObjectType } from 'type-graphql';

import { BSONType } from 'iridium/dist/lib/BSON';
import { IUser } from '../user/iuser';

@InterfaceType()
export abstract class IActivity {
	@Field(type => ID)
	public _id?: string | BSONType | any;
	public user: string | BSONType | IUser;
	@Field(type => String)
	public collectionId: string | BSONType | any;
	@Field(type => String, { nullable: false })
	public type: string;
	@Field(type => Boolean)
	public isFeedable: boolean;
	@Field(type => Date)
	public createdAt: Date;
	@Field(type => Date)
	public updatedAt: Date;
}

@ObjectType({ implements: IActivity })
export class ActivityDTO implements IActivity {
	public _id?: string | BSONType | any;
	@Field(type => String)
	public user: string | BSONType | any;
	public collectionId: string | BSONType | any;
	public type: string;
	public isFeedable: boolean;
	public createdAt: Date;
	public updatedAt: Date;
}

@Collection('activities')
export class Activity extends Instance<IActivity, Activity> implements IActivity {
	public static onCreating(doc: IActivity) {
		doc.createdAt = new Date();
		doc.updatedAt = new Date();
	}

	public static onSaving(doc: Activity, changes: Changes) {
		changes.$set.updatedAt = new Date();
	}

	@ObjectID
	public _id: string;
	@ObjectID
	public user: string;
	@ObjectID
	public collectionId: string;
	@Property(String, true)
	public type: string;
	@Property(Boolean)
	public isFeedable: boolean;
	@Property(Date, false)
	public createdAt: Date;
	@Property(Date, false)
	public updatedAt: Date;
}
