import { injectable, inject } from 'inversify';
import { startOfDay, endOfDay } from 'date-fns';
import { IDailytransactionPersistence } from '../interfaces/persistence/idaily-transaction.persistence';
import { IDailyTransactionService } from '../interfaces/service/idaily-transaction';
import { PERSISTENCE_IDENTIFIERS, SERVICE_IDENTIFIER } from '../../common/constants/identifiers';
import {
	IDailyTransaction,
	DailyTransaction,
	DailyTransactionPopulatedDTO,
} from '../../common/models/daily-transaction.model';
import { DailyTransactionByCategoryReportDTO } from '../../common/models/report/DailyTransactionByCategoryReportDTO';
import { DailyTransactionDatesReportDTO } from '../../common/models/report/DailyTransactionDatesReportDTO';
import { IDailyTransactionFilters } from '../../graphql/types/queries/idaily-transaction.query';
import { plainToClass } from 'class-transformer';
import { IActivityService } from '../interfaces/service/iactivity';
import { ACTIVITIES } from '../../common/constants/activities';
import { IDatesHelperService } from '../interfaces/service/helpers/idates-helper';
import { ICustomCategoryPersistence } from '../interfaces/persistence/icustom-category.persistence';

@injectable()
export class DailyTransactionService implements IDailyTransactionService {
	private customCategoryPersistence: ICustomCategoryPersistence;
	private dailyTransactionPersistence: IDailytransactionPersistence;
	private activityService: IActivityService;
	private datesHelperService: IDatesHelperService;
	constructor(
		@inject(PERSISTENCE_IDENTIFIERS.CUSTOM_CATEGORY) customCategoryPersistence: ICustomCategoryPersistence,
		@inject(PERSISTENCE_IDENTIFIERS.DAILY_TRANSACTION) persistence: IDailytransactionPersistence,
		@inject(SERVICE_IDENTIFIER.ACTIVITY) activityService: IActivityService,
		@inject(SERVICE_IDENTIFIER.DATES_HELPER) datesHelperService: IDatesHelperService
	) {
		this.dailyTransactionPersistence = persistence;
		this.activityService = activityService;
		this.datesHelperService = datesHelperService;
		this.customCategoryPersistence = customCategoryPersistence;
	}
	/**
	 * @description Gets the total sum of the transactions given a single day
	 * @param userId
	 * @param date
	 */
	public async getTotalByUserAndDate(userId: string, date: Date): Promise<number> {
		const start: Date = startOfDay(date);
		const end: Date = endOfDay(date);
		const transactions = await this.dailyTransactionPersistence.getTransactionsByUserAndDay(userId, start, end);
		let sum = 0;
		transactions.forEach(transaction => {
			sum += transaction.amount;
		});
		return sum;
	}

	/**
	 * @description Gets the total sum of the transactions given the criteria
	 * @param {IDailyTransactionFilters} criteria
	 * @returns {number}
	 */
	public async getDailyTransactionsSum(criteria: IDailyTransactionFilters): Promise<number> {
		const transactions = await this.dailyTransactionPersistence.getDailyTransactions({
			user: criteria.user,
			startDate: criteria.startDate,
			endDate: criteria.endDate,
			customCategory: criteria.customCategory,
		});
		let sum = 0;
		transactions.forEach(transaction => {
			sum += transaction.amount;
		});
		return sum;
	}

	/**
	 * @description Gets the transactions given a user and a date
	 * @param userId - The user to whom the transactions belong
	 * @param date - The date. The transactions will be taken from the beginning to the end of the selected Day
	 * @param page - The page to query
	 * @param limit - The amount of items per page
	 */
	public async getTransactionsByUserAndDate(
		userId: string,
		date: Date,
		page: number,
		limit: number
	): Promise<DailyTransaction[]> {
		const start: Date = startOfDay(date);
		const end: Date = endOfDay(date);
		const foundTransactions = await this.dailyTransactionPersistence.getTransactionsByUserAndDayPaginated(
			userId,
			start,
			end,
			page,
			limit
		);
		return foundTransactions;
	}
	/**
	 * @description Gets the transactions given a user and a date
	 * @param userId - The user to whom the transactions belong
	 * @param date - The date. The transactions will be taken from the beginning to the end of the selected Day
	 * @param timezone - Timezone from which the date is coming from. Must be in IANA format
	 * @param page - The page to query
	 * @param limit - The amount of items per page
	 */
	public async getPopulatedTransactionsByUserAndDate(
		userId: string,
		date: Date,
		timezone: string,
		page: number,
		limit: number
	): Promise<DailyTransactionPopulatedDTO[]> {
		const start: Date = this.datesHelperService.startOfDayWithTimezone(date, timezone);
		const end: Date = this.datesHelperService.endOfDayWithTimezone(date, timezone);
		const foundTransactions = await this.dailyTransactionPersistence.getPopulatedTransactionsByUserAndDate(
			userId,
			start,
			end,
			page,
			limit
		);
		return foundTransactions;
	}

	/**
	 * @description Creates a daily transaction
	 * @param {IDailyTransaction} transaction - The transaction data
	 */
	public async createTransaction(transaction: IDailyTransaction): Promise<DailyTransaction> {
		const foundCategory = await this.customCategoryPersistence.getUserCategory(
			transaction.customCategory.toString(),
			transaction.user.toString()
		);
		if (!foundCategory) {
			throw new Error('Custom Category not found');
		}
		const savedTransaction = await this.dailyTransactionPersistence.saveTransaction(transaction);
		await this.activityService.addActivity(
			transaction.user.toString(),
			ACTIVITIES.TRANSACTION,
			savedTransaction._id,
			true
		);
		return savedTransaction;
	}

	/**
	 * @description Edits a daily transaction
	 * @param transaction
	 */
	public async editTransaction(transaction: IDailyTransaction): Promise<DailyTransaction> {
		const foundCategory = await this.customCategoryPersistence.getUserCategory(
			transaction.customCategory.toString(),
			transaction.user.toString()
		);
		if (!foundCategory) {
			throw new Error('Custom Category not found');
		}
		const editedTransaction = await this.dailyTransactionPersistence.editTransaction(transaction);
		return editedTransaction;
	}

	public async removeTransaction(id: string, userId: string) {
		const removedTransaction = await this.dailyTransactionPersistence.removeTransaction(id, userId);
		return removedTransaction;
	}

	/**
	 * @description Attaches the picture URL to a transaction
	 * @param userId
	 * @param transactionId
	 * @param pictutreUrl
	 */
	public async attachPicture(transaction: IDailyTransaction, pictureUrl: string): Promise<DailyTransaction> {
		transaction.pictureUrl = pictureUrl;
		const savedTransaction = await this.dailyTransactionPersistence.editTransaction(transaction);
		return savedTransaction;
	}

	/**
	 * @description Gets a single transaction given the userId and the transactionId
	 * @param userId
	 * @param transactionId
	 */
	public async getUserTransaction(userId: string, transactionId: string): Promise<DailyTransaction> {
		const foundTransaction = await this.dailyTransactionPersistence.getUserTransaction(userId, transactionId);
		return foundTransaction;
	}

	/**
	 * @description Gets the transactions for a user given the ranges of the boundaries object
	 * @param {string} userId - The user ID
	 * @param {Date[]} boundaries - Boundaries for the grouping
	 */
	public async getTransactionsByDatesReport(
		userId: string,
		boundaries: Date[]
	): Promise<DailyTransactionDatesReportDTO[]> {
		const reportItems = await this.dailyTransactionPersistence.getTransactionsByDatesReport(userId, boundaries);
		return reportItems;
	}

	/**
	 * @description Gets the user daily transaction for a date range and specified categories. Also calculates the percentages and sorts them from
	 * largest to smallest
	 * @param {string} userId - The user to whom the expenses belong
	 * @param {Date} start - Start date
	 * @param {Date} end - End date
	 * @param {string }currency? - Currency to check expenses
	 */
	public async getDailyTransactionsByCategoriesReport(
		userId: string,
		start: Date,
		end: Date,
		currency?: string
	): Promise<DailyTransactionByCategoryReportDTO[]> {
		let transactions = await this.dailyTransactionPersistence.getDailyTransactionsByCategoriesReport(
			userId,
			start,
			end,
			currency
		);
		let total = 0;
		transactions.forEach(expense => {
			total += expense.amount;
		});
		transactions = transactions
			.map(expense => {
				expense.percentage = Math.round((expense.amount / total) * 100);
				return expense;
			})
			.sort((a, b) => {
				if (a.percentage > b.percentage) {
					return -1;
				}
				if (a.percentage < b.percentage) {
					return 1;
				}
				return 0;
			});

		return plainToClass(DailyTransactionByCategoryReportDTO, transactions);
	}
}
