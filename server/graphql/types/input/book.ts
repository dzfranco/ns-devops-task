import { ObjectId } from 'mongodb';

import { InputType, Field } from 'type-graphql';

import { IsOptional, IsIn } from 'class-validator';

import { listTimeZones } from 'timezone-support';

import { IBook } from '../../../common/models/books/ibooks.model';

@InputType()
export class EditBookInput extends IBook {
	@Field(type => ObjectId)
	public _id?: ObjectId;
	@Field(type => Boolean, { nullable: true })
	protected hasClosedBooks: boolean;
	@Field(type => Date, { nullable: true })
	protected date: Date;
	protected createdAt: Date;
	protected updatedAt: Date;
	protected user: ObjectId;

	get $hasClosedBooks(): boolean {
		return this.hasClosedBooks;
	}
	set $hasClosedBooks(value: boolean) {
		this.hasClosedBooks = value;
	}
	get $createdAt(): Date {
		return this.createdAt;
	}
	set $createdAt(value: Date) {
		this.createdAt = value;
	}
	get $user(): ObjectId {
		return this.user;
	}
	set $user(value: ObjectId) {
		this.user = value;
	}
	get $date(): Date {
		return this.date;
	}
	set $date(value: Date) {
		this.date = value;
	}
}

@InputType()
export class AddBookInput {
	@Field(type => Date)
	private date: Date;

	@IsOptional()
	@IsIn(listTimeZones())
	@Field(type => String)
	private timezone: string;

	/**
	 * Getter $timezone
	 * @return {string}
	 */
	public get $timezone(): string {
		return this.timezone;
	}

	/**
	 * Setter $timezone
	 * @param {string} value
	 */
	public set $timezone(value: string) {
		this.timezone = value;
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
}
