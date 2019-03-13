import { Collection, Instance, ObjectID, Property, Changes } from 'iridium';
import { IOccupation } from './ioccupation.model';
import { ObjectId } from 'mongodb';
import { OccupationDTO } from './occupation.dto';
import { plainToClass } from 'class-transformer';

@Collection('occupations')
export class Occupation extends Instance<IOccupation, Occupation> {
	public static onCreating(document: IOccupation) {
		document.$createdAt = new Date();
		document.$updatedAt = new Date();
	}

	public static onSaving(instance: Occupation, changes: Changes) {
		changes.$set.updatedAt = new Date();
	}

	@ObjectID
	private _id: ObjectId;
	@Property(String)
	private name: string;
	@Property(String)
	private locale: string;
	@Property(Date)
	private createdAt: Date;
	@Property(Date)
	private updatedAt: Date;

	public toDTO(): OccupationDTO {
		const jsonified = this.toJSON();
		return plainToClass(OccupationDTO, jsonified as OccupationDTO);
	}

	/**
	 * Getter id
	 * @return {ObjectId}
	 */
	public get id(): ObjectId {
		return this._id;
	}

	/**
	 * Getter $name
	 * @return {string}
	 */
	public get $name(): string {
		return this.name;
	}

	/**
	 * Getter $locale
	 * @return {string}
	 */
	public get $locale(): string {
		return this.locale;
	}

	/**
	 * Getter $createdAt
	 * @return {Date}
	 */
	public get $createdAt(): Date {
		return this.createdAt;
	}

	/**
	 * Getter $updatedAt
	 * @return {Date}
	 */
	public get $updatedAt(): Date {
		return this.updatedAt;
	}

	/**
	 * Setter id
	 * @param {ObjectId} value
	 */
	public set id(value: ObjectId) {
		this._id = value;
	}

	/**
	 * Setter $name
	 * @param {string} value
	 */
	public set $name(value: string) {
		this.name = value;
	}

	/**
	 * Setter $locale
	 * @param {string} value
	 */
	public set $locale(value: string) {
		this.locale = value;
	}

	/**
	 * Setter $createdAt
	 * @param {Date} value
	 */
	public set $createdAt(value: Date) {
		this.createdAt = value;
	}

	/**
	 * Setter $updatedAt
	 * @param {Date} value
	 */
	public set $updatedAt(value: Date) {
		this.updatedAt = value;
	}
}
