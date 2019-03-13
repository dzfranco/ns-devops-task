import { ObjectId } from 'mongodb';

import { toObjectID } from 'iridium';

import { ObjectType } from 'type-graphql';

import { Type, Transform } from 'class-transformer';

import { IBook } from './ibooks.model';

@ObjectType({ implements: IBook })
export class BookDTO extends IBook {
	@Type(() => String)
	@Transform(
		(value: string) => {
			if (value) {
				return toObjectID(value);
			}
			return null;
		},
		{ toClassOnly: true }
	)
	public _id: ObjectId;
	@Type(() => String)
	@Transform((value: string) => toObjectID(value), { toClassOnly: true })
	protected user: ObjectId;
	protected hasClosedBooks: boolean;
	protected date: Date;
	protected createdAt: Date;
	protected updatedAt: Date;
}
