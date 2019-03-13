export interface IDatesHelperService {
	/**
	 * @description Converts the date to the desired timezone or returns the date if the timezone doesn't exist
	 * @param date
	 * @param timeZoneName
	 */
	toTimeZone(date: Date, timeZoneName: string): Date;

	/**
	 * @description Gets the start of month equivalent in UTC time for a certain timezone.
	 * I.E 00:00:00 in America/Los_Angeles converted to 06:00:00 in UTC
	 * @param {Date} day - An arbitrary date
	 * @param {string} timeZoneName -
	 */
	startOfMonthWithTimeZone(day: Date, timeZoneName?: string): Date;

	/**
	 * @description Gets the end of month equivalent in UTC time for a certain timezone.
	 * I.E 00:00:00 in America/Los_Angeles converted to 06:00:00 in UTC
	 * @param {Date} day - An arbitrary date
	 * @param {string} timeZoneName -
	 */
	endOfMonthWithTimeZone(day: Date, timeZoneName?: string): Date;

	/**
	 * @description Gets the start of day equivalent in UTC time for a certain timezone.
	 * I.E 00:00:00 in America/Los_Angeles converted to 06:00:00 in UTC
	 * @param {Date} day - An arbitrary date
	 * @param {string} timeZoneName -
	 */
	startOfDayWithTimezone(day: Date, timeZoneName?: string): Date;

	/**
	 * @description Gets the end of day equivalent in UTC time for a certain timezone.
	 * I.E 23:59:59 in America/Los_Angeles converted to 05:59:59 in UTC
	 * @param {Date} day - An arbitrary date
	 * @param {string} timeZoneName -
	 */
	endOfDayWithTimezone(day: Date, timeZoneName?: string): Date;
}
