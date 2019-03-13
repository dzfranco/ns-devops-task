import { ObjectId } from 'mongodb';

import { InterfaceType, Field, ID } from 'type-graphql';

@InterfaceType()
export abstract class IBook {
	@Field(type => ObjectId, { nullable: true })
	public _id?: ObjectId;
	@Field(type => ObjectId)
	protected user: ObjectId;
	@Field(type => Boolean)
	protected hasClosedBooks: boolean;
	@Field(type => Date)
	protected date: Date;
	@Field(type => Date)
	protected createdAt: Date;
	@Field(type => Date)
	protected updatedAt: Date;

	/**
	 * Getter $user
	 * @return {ObjectId }
	 */
	public get $user(): ObjectId {
		return this.user;
	}

	/**
	 * Setter $user
	 * @param {string } value
	 */
	public set $user(value: ObjectId) {
		this.user = value;
	}

	/**
	 * Getter $date
	 * @return {Date}
	 */
	public get $date(): Date {
		return this.date;
	}

	/**
	 * Setter $date
	 * @param {Date} value
	 */
	public set $date(value: Date) {
		this.date = value;
	}

	/**
	 * Getter $createdAt
	 * @return {Date}
	 */
	public get $createdAt(): Date {
		return this.createdAt;
	}

	/**
	 * Setter $createdAt
	 * @param {Date} value
	 */
	public set $createdAt(value: Date) {
		this.createdAt = value;
	}

	/**
	 * Getter $updatedAt
	 * @return {Date}
	 */
	public get $updatedAt(): Date {
		return this.updatedAt;
	}

	public get $hasClosedBooks(): boolean {
		return this.hasClosedBooks;
	}

	/**
	 * Setter $updatedAt
	 * @param {Date} value
	 */
	public set $updatedAt(value: Date) {
		this.updatedAt = value;
	}

	/**
	 * Sets $has closed books
	 */
	public set $hasClosedBooks(value: boolean) {
		this.hasClosedBooks = value;
	}
}
