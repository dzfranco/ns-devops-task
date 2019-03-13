import { InterfaceType, Field } from 'type-graphql';
import { BSONType } from 'iridium/dist/lib/BSON';

@InterfaceType()
export abstract class ICustomCategory {
	public _id?: string | BSONType | any;
	@Field(() => Boolean)
	public active: boolean;
	@Field(() => String)
	public name: string;
	public user: string | BSONType | any;
	@Field(() => String)
	public type: string;
	@Field(() => Date)
	public createdAt: Date;
	@Field(() => Date)
	public updatedAt: Date;
}
