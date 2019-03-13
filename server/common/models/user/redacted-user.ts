import { ObjectType, Field, InterfaceType, ID } from 'type-graphql';
import { ObjectId } from 'bson';
import { BSONType } from 'iridium/dist/lib/BSON';
import { RangeFieldInt } from '../helpers/range-int';

@InterfaceType()
export abstract class IRedactedUser {
	@Field(type => ID)
	public _id?: string | ObjectId | BSONType | any;
	@Field(type => String)
	private name: string;
	@Field(type => String, { nullable: true })
	private nickname: string;
	@Field(type => RangeFieldInt)
	private age: RangeFieldInt;
	@Field(type => String)
	private sex: string;
	@Field(type => String)
	private occupation: string;
	@Field(type => RangeFieldInt)
	private monthlyIncome: RangeFieldInt;
}

@ObjectType({ implements: IRedactedUser })
export class RedactedUserDTO {
	public _id?: string | ObjectId | BSONType | any;
	private name: string;
	private nickname: string;
	private age: RangeFieldInt;
	private sex: string;
	private occupation: string;
	private monthlyIncome: RangeFieldInt;

	public redactMonthlyIncome(income: number) {
		const range = new RangeFieldInt();
		this.monthlyIncome = range;
	}

	public redactAgeRange(age: number) {
		const range = new RangeFieldInt();
		if (age <= 19) {
			range.$min = 15;
			range.$max = 19;
		}
		if (age > 19 && age <= 29) {
			range.$min = 20;
			range.$max = 29;
		}
		if (age > 29 && age <= 39) {
			range.$min = 30;
			range.$max = 39;
		}
		if (age > 39 && age <= 49) {
			range.$min = 39;
			range.$max = 49;
		}
		if (age > 49 && age <= 59) {
			range.$min = 50;
			range.$max = 59;
		}
		if (age > 59 && age <= 69) {
			range.$min = 59;
			range.$max = 69;
		}
		if (age > 69) {
			range.$min = 69;
			range.$max = 0;
		}
		this.age = range;
	}

	/**
	 * Getter $name
	 * @return {string}
	 */
	public get $name(): string {
		return this.name;
	}

	/**
	 * Getter $nickname
	 * @return {string}
	 */
	public get $nickname(): string {
		return this.nickname;
	}

	/**
	 * Getter $age
	 * @return {RangeFieldInt}
	 */
	public get $age(): RangeFieldInt {
		return this.age;
	}

	/**
	 * Getter $sex
	 * @return {string}
	 */
	public get $sex(): string {
		return this.sex;
	}

	/**
	 * Getter $occupation
	 * @return {string}
	 */
	public get $occupation(): string {
		return this.occupation;
	}

	/**
	 * Getter $monthlyIncome
	 * @return {RangeFieldInt}
	 */
	public get $monthlyIncome(): RangeFieldInt {
		return this.monthlyIncome;
	}

	/**
	 * Setter $name
	 * @param {string} value
	 */
	public set $name(value: string) {
		this.name = value;
	}

	/**
	 * Setter $nickname
	 * @param {string} value
	 */
	public set $nickname(value: string) {
		this.nickname = value;
	}

	/**
	 * Setter $age
	 * @param {RangeFieldInt} value
	 */
	public set $age(value: RangeFieldInt) {
		this.age = value;
	}

	/**
	 * Setter $sex
	 * @param {string} value
	 */
	public set $sex(value: string) {
		this.sex = value;
	}

	/**
	 * Setter $occupation
	 * @param {string} value
	 */
	public set $occupation(value: string) {
		this.occupation = value;
	}

	/**
	 * Setter $monthlyIncome
	 * @param {RangeFieldInt} value
	 */
	public set $monthlyIncome(value: RangeFieldInt) {
		this.monthlyIncome = value;
	}
}
