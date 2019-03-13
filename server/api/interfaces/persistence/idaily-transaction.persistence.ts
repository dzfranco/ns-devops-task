import {
	DailyTransaction,
	IDailyTransaction,
	DailyTransactionPopulatedDTO,
} from '../../../common/models/daily-transaction.model';
import { DailyTransactionByCategoryReportDTO } from '../../../common/models/report/DailyTransactionByCategoryReportDTO';
import { DailyTransactionDatesReportDTO } from '../../../common/models/report/DailyTransactionDatesReportDTO';
import { IDailyTransactionFilters } from '../../../graphql/types/queries/idaily-transaction.query';

export interface IDailytransactionPersistence {
	getTransactionsByUserAndDayPaginated(
		userId: string,
		start: Date,
		end: Date,
		page: number,
		limit: number,
		fields?: { [name: string]: number }
	): Promise<DailyTransaction[]>;
	getPopulatedTransactionsByUserAndDate(
		userId: string,
		start: Date,
		end: Date,
		page: number,
		limit: number,
		fields?: { [name: string]: number }
	): Promise<DailyTransactionPopulatedDTO[]>;
	getTransactionsByUserAndDay(
		userId: string,
		start: Date,
		end: Date,
		fields?: { [name: string]: number }
	): Promise<DailyTransaction[]>;
	saveTransaction(transaction: IDailyTransaction): Promise<DailyTransaction>;
	editTransaction(transaction: IDailyTransaction): Promise<DailyTransaction>;
	removeTransaction(id: string, userId: string): Promise<DailyTransaction>;
	getUserTransaction(userId: string, transactionId: string): Promise<DailyTransaction>;

	/**
	 * @description Gets the daily transactions given a user and a date range. Includes both dates
	 * @param {string} userId - User Id
	 * @param {Date} start - Start date
	 * @param {Date} end - End Date
	 */
	getTransactionsByUserAndDateRange(userId: string, start: Date, end: Date): Promise<DailyTransaction[]>;
	/**
	 * @description Gets a user's daily transactions separated by boundaries given in the dates array
	 * @param {string} userId - The user id
	 * @param {Date[]} dates - Dates serving as boundaries as described in https://docs.mongodb.com/manual/reference/operator/aggregation/bucket/
	 * for boundaries field
	 */
	getTransactionsByDatesReport(userId: string, boundaries: Date[]): Promise<DailyTransactionDatesReportDTO[]>;
	/**
	 * @description Gets the daily transactions that match the criteria object
	 * @param {IDailyTransactionFilters} criteria
	 */
	getDailyTransactions(criteria: IDailyTransactionFilters): Promise<DailyTransaction[]>;

	/**
	 * @description Gets the daily transactions grouped by categories given a user, a date range and an optional currency
	 * @param {string} userId - The user ID
	 * @param {Date} start
	 * @param {Date} end
	 * @param {string} currency
	 * @returns {Promise<DailyTransactionByCategoryReportDTO[]>} DTOs with the percentage field set to null
	 */
	getDailyTransactionsByCategoriesReport(
		userId: string,
		start: Date,
		end: Date,
		currency?: string
	): Promise<DailyTransactionByCategoryReportDTO[]>;
	/**
	 * @description Gets the transactions given a user and a date
	 * @param userId - The user to whom the transactions belong
	 * @param date - The date. The transactions will be taken from the beginning to the end of the selected Day
	 * @param page - The page to query
	 * @param limit - The amount of items per page
	 */
	getPopulatedTransactionsByUserAndDate(
		userId: string,
		start: Date,
		end: Date,
		page: number,
		limit: number,
		fields?: { [name: string]: number }
	);
}
