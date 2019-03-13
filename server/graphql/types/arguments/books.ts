import { ArgsType, Field, Int } from 'type-graphql';

import { IsOptional, IsIn, IsPositive, IsInt, Min, Max } from 'class-validator';

import { listTimeZones } from 'timezone-support';
import { BOOK_CALENDAR_TYPES_ARRAY } from '../../../common/constants/books';

@ArgsType()
export class GetBooksCalendarArgs {
	@IsIn(BOOK_CALENDAR_TYPES_ARRAY)
	@Field(type => String)
	public type: string;
	@Field(type => Date)
	public date: Date;
	@IsOptional()
	@IsIn(listTimeZones())
	@Field(type => String, { nullable: true })
	public timezone: string;
}

@ArgsType()
export class GetBooksArgs {
	@Field(type => Date)
	public startDate: Date;
	@Field(type => Date)
	public endDate: Date;
	@IsPositive()
	@IsInt()
	@Field(type => Int)
	public page: number;
	@IsPositive()
	@IsInt()
	@Min(5)
	@Max(20)
	@Field(type => Int)
	public limit: number;
	@IsOptional()
	@IsIn(listTimeZones())
	@Field(type => String, { nullable: true })
	public timezone: string;

	/**
	 * Getter $startDate
	 * @return {Date}
	 */
	public get $startDate(): Date {
		return this.startDate;
	}

	/**
	 * Setter $startDate
	 * @param {Date} value
	 */
	public set $startDate(value: Date) {
		this.startDate = value;
	}
}

@ArgsType()
export class GetBookByDayArgs {
	@IsOptional()
	@Field(type => Date, { nullable: true })
	public date: Date;
	@IsOptional()
	@IsIn(listTimeZones())
	@Field(type => String, { nullable: true })
	public timezone: string;

	/**
	 * Getter $day
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
