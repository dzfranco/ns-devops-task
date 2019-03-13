import {
	IDailyTransaction,
	DailyTransaction,
	DailyTransactionPopulatedDTO,
} from '../../../common/models/daily-transaction.model';
import { DailyTransactionByCategoryReportDTO } from '../../../common/models/report/DailyTransactionByCategoryReportDTO';
import { DailyTransactionDatesReportDTO } from '../../../common/models/report/DailyTransactionDatesReportDTO';
import { IDailyTransactionFilters } from '../../../graphql/types/queries/idaily-transaction.query';
export interface IDailyTransactionService {
	getTotalByUserAndDate(userId: string, date: Date): Promise<number>;
	getTransactionsByUserAndDate(userId: string, date: Date, page: number, limit: number): Promise<DailyTransaction[]>;
	createTransaction(transaction: IDailyTransaction): Promise<DailyTransaction>;
	editTransaction(transaction: IDailyTransaction): Promise<DailyTransaction>;
	removeTransaction(id: string, userId: string): Promise<DailyTransaction>;
	attachPicture(transaction: IDailyTransaction, pictureUrl: string): Promise<DailyTransaction>;
	getUserTransaction(userId: string, transactionId: string): Promise<DailyTransaction>;

	getTransactionsByDatesReport(userId: string, boundaries: Date[]): Promise<DailyTransactionDatesReportDTO[]>;

	/**
	 * @description Gets the total sum of the transactions given the criteria
	 * @param {IDailyTransactionFilters} criteria
	 * @returns {number}
	 */
	getDailyTransactionsSum(criteria: IDailyTransactionFilters): Promise<number>;

	/**
	 * @description Gets the user daily transaction for a date range and specified categories. Also calculates the percentages and sorts them from
	 * largest to smallest
	 * @param {string} userId - The user to whom the expenses belong
	 * @param {Date} start - Start date
	 * @param {Date} end - End date
	 * @param {string }currency? - Currency to check expenses
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
	 * @param timezone - Timezone from which the date is coming from. Must be in IANA format
	 * @param page - The page to query
	 * @param limit - The amount of items per page
	 */
	getPopulatedTransactionsByUserAndDate(
		userId: string,
		date: Date,
		timezone: string,
		page: number,
		limit: number
	): Promise<DailyTransactionPopulatedDTO[]>;
}
