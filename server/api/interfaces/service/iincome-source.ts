import { IIncomeSource, IncomeSource } from '../../../common/models/income-source';
import { IncomeSourceFilters } from '../../../graphql/types/input/income-source';
import { IncomeSourceDatesReportDTO } from '../../../common/models/report/IncomeSourceDatesReportDTO';
import { RangeFieldInt } from '../../../common/models/helpers/range-int';
export interface IIncomeSourceService {
	editIncomeSources(data: IIncomeSource): Promise<IncomeSource>;
	createIncomeSource(data: IIncomeSource): Promise<IncomeSource>;
	disableIncomeSource(userId: string, incomeSourceId: string): Promise<IncomeSource>;
	getUserIncomeSources(userId: string, filters: IncomeSourceFilters): Promise<IncomeSource[]>;

	/**
	 * @description Gets the income sources sum according to the criteria
	 * @param criteria
	 */
	getIncomeSourcesSum(criteria: IncomeSourceFilters): Promise<number>;
	/**
	 * @description Gets the monthly income for a user. Removes the tax percentage from the total income
	 * @param {string} userId - The user from which the income sources will be calculated
	 * @param {Date} date? - The date to calculate
	 */
	getMonthlyIncomeForUser(userId: string, date?: Date): Promise<number>;
	/**
	 * @description Gets the daily budget for a user. Takes the output from getMonthlyIncome and divides it
	 * into the amount of days
	 * @param {string} userId - The user from which the income sources will be calculated
	 * @param {Date} date - The date for which the  budget be calculated
	 */
	getDailyBudgetForUser(userId: string, date: Date): Promise<number>;
	/**
	 * @description Carries over the active income sources for every user. It also changed the carried over
	 * field so that they won't be carried over more than once
	 */
	carryOverIncomeSources(): Promise<IncomeSource[]>;
	/**
	 * @description Gets the income sources for a user given the ranges of the boundaries object
	 * @param {string} userId - The user ID
	 * @param {Date[]} boundaries - Boundaries for the grouping
	 */
	getIncomeSourcesByDatesReport(userId: string, boundaries: Date[]): Promise<IncomeSourceDatesReportDTO[]>;

	/**
	 * @description Removes an income source object given the user Id and income source id if the object belongs to the user
	 * @param userId
	 * @param incomeSourceId
	 */
	deleteIncomeSource(userId: string, incomeSourceId: string): Promise<IncomeSource>;

	/**
	 * @description Disables all the income sources belonging to a custom category
	 * @param {string} customCategoryId
	 */
	disableCustomCategoryIncomeSources(customCategoryId: string): Promise<IncomeSource[]>;

	/**
	 * @description Gets the monthly income for a user given a date range from {startDate, endDate} (including both dates).
	 * Removes the tax percentage from the total income
	 * @param {string} userId - The user from which the income sources will be calculated
	 * @param {Date} startDate - Start Date
	 * @param {Date} endDate - End date
	 */
	getMonthlyIncomeForUserDateRange(userId: string, startDate: Date, endDate: Date): Promise<number>;

	/**
	 * @description Gets the income sources as a range according to the filters
	 */
	getRedactedIncomeSources(userId: string, currency: string, startDate: Date, endDate: Date): Promise<RangeFieldInt>;
}
