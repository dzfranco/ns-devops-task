import { Collection, Instance, ObjectID, Property, Changes } from 'iridium';

import { InterfaceType, Field, ID, ObjectType } from 'type-graphql';

import { plainToClass } from 'class-transformer';

import { BSONType } from 'iridium/dist/lib/BSON';

import { UserDTO } from './user/user.dto';

@InterfaceType()
export abstract class IFriend {
	@Field(type => ID)
	public _id?: string | BSONType | any;
	@Field(type => String)
	public user: string | BSONType | any;
	@Field(type => String)
	public friend: string | BSONType | any;
	@Field(type => Boolean)
	public isFavorite: boolean;
	@Field(type => Date)
	public createdAt: Date;
	@Field(type => Date)
	public updatedAt: Date;
	@Field(type => Boolean)
	public isActive: boolean;
}

@ObjectType({ implements: IFriend })
export class FriendDTO implements IFriend {
	public _id?: string | BSONType | any;
	public user: string | BSONType | any;
	public friend: string | BSONType | UserDTO;
	public isFavorite: boolean;
	public createdAt: Date;
	public updatedAt: Date;
	public isActive: boolean;
}

@Collection('friends')
export class Friend extends Instance<IFriend, Friend> implements IFriend {
	public static onCreating(doc: IFriend) {
		doc.createdAt = new Date();
		doc.updatedAt = new Date();
		doc.isActive = true;
	}

	public static onSaving(doc: Friend, changes: Changes) {
		changes.$set.updatedAt = new Date();
	}

	@ObjectID
	public _id: string;
	@ObjectID
	public user: string;
	@ObjectID
	public friend: string;
	@Property(Boolean)
	public isFavorite: boolean;
	@Property(Boolean)
	public isActive: boolean;
	@Property(Date, false)
	public createdAt: Date;
	@Property(Date, false)
	public updatedAt: Date;

	public toDTO(): FriendDTO {
		const jsonified = this.toJSON();
		jsonified._id = this._id.toString();
		jsonified.user = this.user.toString();
		jsonified.friend = this.friend.toString();
		jsonified.cratedAt = this.createdAt.toISOString();
		return plainToClass(FriendDTO, jsonified as FriendDTO);
	}
	public toPopulatedFriendDTO(): FriendDTO {
		const jsonified = this.toJSON();
		jsonified._id = this._id.toString();
		jsonified.user = this.user.toString();
		jsonified.friend = this.friend;
		jsonified.cratedAt = this.createdAt.toISOString();
		return plainToClass(FriendDTO, jsonified as FriendDTO);
	}
}
