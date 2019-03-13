import { InterfaceType, Field } from 'type-graphql';
import { ObjectId } from 'mongodb';

@InterfaceType()
export abstract class IOccupation {
	@Field(type => ObjectId)
	public _id: ObjectId;
	@Field(type => String)
	protected name: string;
	@Field(type => String)
	protected locale: string;
	@Field(type => Date)
	protected createdAt: Date;
	@Field(type => Date)
	protected updatedAt: Date;

	get $name(): string {
		return this.name;
	}

	set $name(value: string) {
		this.name = value;
	}

	get $locale(): string {
		return this.locale;
	}

	set $locale(value: string) {
		this.locale = value;
	}

	get $createdAt(): Date {
		return this.createdAt;
	}

	set $createdAt(value: Date) {
		this.createdAt = value;
	}

	get $updatedAt(): Date {
		return this.updatedAt;
	}

	set $updatedAt(value: Date) {
		this.updatedAt = value;
	}
}
