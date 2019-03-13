import { startOfDay, addMinutes, endOfDay, startOfMonth, endOfMonth } from 'date-fns';

import { injectable } from 'inversify';

import { findTimeZone, getUTCOffset } from 'timezone-support';

import { convertToTimeZone } from 'date-fns-timezone';

import { IDatesHelperService } from '../../interfaces/service/helpers/idates-helper';

@injectable()
export class DatesHelperService implements IDatesHelperService {
	/**
	 * @description Converts the date to the desired timezone or returns the date if the timezone doesn't exist
	 * @param date
	 * @param timeZoneName
	 */
	public toTimeZone(date: Date, timeZoneName: string): Date {
		if (timeZoneName) {
			return convertToTimeZone(date, { timeZone: timeZoneName });
		}
		return date;
	}
	/**
	 * @description Gets the start of month equivalent in UTC time for a certain timezone.
	 * I.E 00:00:00 in America/Los_Angeles converted to 06:00:00 in UTC
	 * @param {Date} day - An arbitrary date
	 * @param {string} timeZoneName -
	 */
	public startOfMonthWithTimeZone(day: Date, timeZoneName?: string): Date {
		if (!timeZoneName) {
			return startOfMonth(day);
		}
		const timeZone = findTimeZone(timeZoneName);
		const date = convertToTimeZone(day, { timeZone: timeZoneName });
		return startOfMonth(date);
	}

	/**
	 * @description Gets the end of month equivalent in UTC time for a certain timezone.
	 * I.E 00:00:00 in America/Los_Angeles converted to 06:00:00 in UTC
	 * @param {Date} day - An arbitrary date
	 * @param {string} timeZoneName -
	 */
	public endOfMonthWithTimeZone(day: Date, timeZoneName?: string): Date {
		if (!timeZoneName) {
			return endOfMonth(day);
		}
		const timeZone = findTimeZone(timeZoneName);
		const date = convertToTimeZone(day, { timeZone: timeZoneName });
		return endOfMonth(date);
	}

	/**
	 * @description Gets the start of day equivalent in UTC time for a certain timezone.
	 * I.E 00:00:00 in America/Los_Angeles converted to 06:00:00 in UTC
	 * @param {Date} day - An arbitrary date
	 * @param {string} timeZoneName -
	 */
	public startOfDayWithTimezone(day: Date, timeZoneName?: string): Date {
		if (!timeZoneName) {
			return startOfDay(day);
		}
		const timeZone = findTimeZone(timeZoneName);
		const date = convertToTimeZone(day, { timeZone: timeZoneName });
		return startOfDay(date);
	}

	/**
	 * @description Gets the end of day equivalent in UTC time for a certain timezone.
	 * I.E 23:59:59 in America/Los_Angeles converted to 05:59:59 in UTC
	 * @param {Date} day - An arbitrary date
	 * @param {string} timeZoneName -
	 */
	public endOfDayWithTimezone(day: Date, timeZoneName?: string): Date {
		if (!timeZoneName) {
			return endOfDay(day);
		}
		const timeZone = findTimeZone(timeZoneName);
		const date = convertToTimeZone(day, { timeZone: timeZoneName });
		return endOfDay(date);
	}
}
