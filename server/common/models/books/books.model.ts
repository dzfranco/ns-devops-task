import { ObjectID, Instance, Property, Collection, Changes } from 'iridium';

import { ObjectId } from 'mongodb';

import { ObjectType } from 'type-graphql';

import { plainToClass } from 'class-transformer';

import { BookDTO } from './books.dto';
import { IBook } from './ibooks.model';

@Collection('books')
export class Book extends Instance<IBook, Book> {
	public static onCreating(document: IBook) {
		document.$createdAt = new Date();
		document.$updatedAt = new Date();
	}

	public static onSaving(instance: Book, changes: Changes) {
		changes.$set.updatedAt = new Date();
	}

	@ObjectID
	private _id: ObjectId;
	@ObjectID
	private user: ObjectId;
	@Property(Date)
	private date: Date;
	@Property(Date)
	private createdAt: Date;
	@Property(Date)
	private updatedAt: Date;
	@Property(Boolean)
	private hasClosedBooks: boolean;

	public toDTO(): BookDTO {
		const jsonified = this.toJSON();
		return plainToClass(BookDTO, jsonified as BookDTO);
	}

	/**
	 * Getter id
	 * @return {ObjectId}
	 */
	public get id(): ObjectId {
		return this._id;
	}

	/**
	 * Setter id
	 * @param {ObjectId} value
	 */
	public set id(value: ObjectId) {
		this._id = value;
	}

	/**
	 * Getter $user
	 * @return {ObjectId}
	 */
	public get $user(): ObjectId {
		return this.user;
	}

	/**
	 * Setter $user
	 * @param {ObjectId} value
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

	/**
	 * Setter $updatedAt
	 * @param {Date} value
	 */
	public set $updatedAt(value: Date) {
		this.updatedAt = value;
	}

	/**
	 * Getter $hasClosedBooks
	 * @return {boolean}
	 */
	public get $hasClosedBooks(): boolean {
		return this.hasClosedBooks;
	}

	/**
	 * Setter $hasClosedBooks
	 * @param {boolean} value
	 */
	public set $hasClosedBooks(value: boolean) {
		this.hasClosedBooks = value;
	}
}
