import { toObjectID } from 'iridium';

import { startOfMonth, getMonth, getYear } from 'date-fns';

import { inject, injectable } from 'inversify';

import { IDailytransactionPersistence } from '../interfaces/persistence/idaily-transaction.persistence';
import { DATABASE_IDENTIFIER } from '../../common/constants/identifiers';
import { MyDatabaseI } from '../../common/interfaces/imongo';
import {
	DailyTransaction,
	IDailyTransaction,
	DailyTransactionPopulatedDTO,
} from '../../common/models/daily-transaction.model';
import { DailyTransactionByCategoryReportDTO } from '../../common/models/report/DailyTransactionByCategoryReportDTO';
import { DailyTransactionDatesReportDTO } from '../../common/models/report/DailyTransactionDatesReportDTO';
import { IDailyTransactionFilters } from '../../graphql/types/queries/idaily-transaction.query';
import { plainToClass } from 'class-transformer';
import { CustomCategoryDTO } from '../../common/models/categories/custom-category';

@injectable()
export class DailyTransactionPersistence implements IDailytransactionPersistence {
	public myDatabase: MyDatabaseI;
	constructor(@inject(DATABASE_IDENTIFIER.MYDATABASE) database: MyDatabaseI) {
		this.myDatabase = database;
	}

	/**
	 * @description Gets the daily transactions that match the criteria object
	 * @param {IDailyTransactionFilters} criteria
	 */
	public async getDailyTransactions(criteria: IDailyTransactionFilters): Promise<DailyTransaction[]> {
		const query = { user: null, date: {}, customCategory: null };
		if (criteria.user) {
			query.user = criteria.user;
		} else {
			delete query.user;
		}
		if (criteria.startDate === undefined && criteria.endDate === undefined) {
			delete query.date;
		} else {
			if (criteria.startDate) {
				query.date = Object.assign(query.date, { $gte: new Date(criteria.startDate) });
			}
			if (criteria.endDate) {
				query.date = Object.assign(query.date, { $lte: new Date(criteria.endDate) });
			}
		}
		if (criteria.customCategory) {
			query.customCategory = criteria.customCategory;
		} else {
			delete query.customCategory;
		}
		const foundTransactions = this.myDatabase.DailyTransaction.find(query).toArray();
		return foundTransactions;
	}

	public async getTransactionsByUserAndDayPaginated(
		userId: string,
		start: Date,
		end: Date,
		page: number,
		limit: number,
		fields?: { [name: string]: number }
	): Promise<DailyTransaction[]> {
		const query = { date: { $gte: start, $lte: end }, user: userId };
		const foundTransactions = await this.myDatabase.DailyTransaction.find(query, fields)
			.skip((page - 1) * limit)
			.limit(limit)
			.toArray();
		return foundTransactions;
	}

	public async getPopulatedTransactionsByUserAndDate(
		userId: string,
		start: Date,
		end: Date,
		page: number,
		limit: number,
		fields?: { [name: string]: number }
	): Promise<DailyTransactionPopulatedDTO[]> {
		const pipeline = [];
		const matchStage = {
			$match: {
				$expr: {
					$and: [
						{
							$gte: ['$date', start],
						},
						{
							$lte: ['$date', end],
						},
						{
							$eq: ['$user', toObjectID(userId)],
						},
					],
				},
			},
		};

		const lookupStage = {
			$lookup: {
				from: 'custom_categories',
				localField: 'customCategory',
				foreignField: '_id',
				as: 'customCategory',
			},
		};

		const unwindStage = {
			$unwind: {
				path: '$customCategory',
				preserveNullAndEmptyArrays: true,
			},
		};

		const skipStage = {
			$skip: (page - 1) * limit,
		};

		const limitStage = {
			$limit: limit,
		};

		pipeline.push(matchStage, lookupStage, unwindStage, skipStage, limitStage);

		const transactions = await this.myDatabase.DailyTransaction.aggregate<DailyTransactionPopulatedDTO>(pipeline);

		const formattedTransactions = transactions.map(transaction => {
			return plainToClass(DailyTransactionPopulatedDTO, transaction as DailyTransactionPopulatedDTO);
		});

		return formattedTransactions;
	}

	public async getTransactionsByUserAndDay(
		userId: string,
		start: Date,
		end: Date,
		fields?: { [name: string]: number }
	): Promise<DailyTransaction[]> {
		const query = { date: { $gte: start, $lte: end }, user: toObjectID(userId) };
		const foundTransactions = await this.myDatabase.DailyTransaction.find(query, fields).toArray();
		return foundTransactions;
	}
	/**
	 * @description Gets a transaction by user and id
	 * @param userId
	 * @param transactionId
	 */
	public async getUserTransaction(userId: string, transactionId: string): Promise<DailyTransaction> {
		const query = { user: userId, _id: transactionId };
		const foundTransaction = await this.myDatabase.DailyTransaction.get(query);
		return foundTransaction;
	}

	public async saveTransaction(transaction: IDailyTransaction): Promise<DailyTransaction> {
		const createdTransaction: DailyTransaction = await this.myDatabase.DailyTransaction.insert(transaction);
		return createdTransaction;
	}

	public async editTransaction(transaction: IDailyTransaction): Promise<DailyTransaction> {
		const foundTransaction: DailyTransaction = await this.myDatabase.DailyTransaction.get({
			_id: transaction._id,
			user: transaction.user,
		});
		if (foundTransaction === null) {
			throw new Error('Transaction not found');
		}
		for (let key in transaction) {
			if (key !== undefined) {
				foundTransaction[key] = transaction[key];
			}
		}
		return foundTransaction.save();
	}

	public async removeTransaction(id: string, userId: string) {
		const foundTransaction: DailyTransaction = await this.myDatabase.DailyTransaction.get({
			_id: id,
			user: userId,
		});
		return foundTransaction.delete();
	}

	/**
	 * @description Gets the daily transactions given a user and a date range. Includes both dates
	 * @param {string} userId - User Id
	 * @param {Date} start - Start date
	 * @param {Date} end - End Date
	 */
	public async getTransactionsByUserAndDateRange(
		userId: string,
		start: Date,
		end: Date
	): Promise<DailyTransaction[]> {
		const query = { user: userId, date: { $gte: start, $lte: end } };
		const foundTransactions = await this.myDatabase.DailyTransaction.find(query).toArray();
		return foundTransactions;
	}

	/**
	 * @description Gets a user's daily transactions separated by boundaries given in the dates array
	 * @param {string} userId - The user id
	 * @param {Date[]} dates - Dates serving as boundaries as described in https://docs.mongodb.com/manual/reference/operator/aggregation/bucket/
	 * for boundaries field
	 */
	public async getTransactionsByDatesReport(
		userId: string,
		dates: Date[]
	): Promise<DailyTransactionDatesReportDTO[]> {
		const buckets: Array<{ _id: string; spent: number }> = (await this.myDatabase.DailyTransaction.aggregate([
			{
				$match: {
					user: toObjectID(userId),
				},
			},
			{
				$bucket: {
					groupBy: '$date',
					boundaries: dates,
					default: 'uncategorized',
					output: {
						spent: {
							$sum: '$amount',
						},
						items: {
							$addToSet: '$_id',
						},
					},
				},
			},
		])) as Array<{ _id: string; spent: number }>;

		// Create initial objects because we don't know if mongo will give us the same amount of buckets
		const reportObjects: DailyTransactionDatesReportDTO[] = dates.map((date: Date) => {
			const report = new DailyTransactionDatesReportDTO();
			report.date = startOfMonth(date);
			report.month = getMonth(date);
			report.year = getYear(date);
			report.totalSpent = 0;
			return report;
		});

		// Find the correct bucket and insert data
		buckets.forEach((bucket: { _id: string; spent: number }) => {
			const foundReport = reportObjects.find((report: DailyTransactionDatesReportDTO) => {
				return report.month === getMonth(new Date(bucket._id)) && report.year === getYear(new Date(bucket._id));
			});
			if (foundReport !== undefined) {
				foundReport.totalSpent = bucket.spent;
			}
		});

		return reportObjects;
	}

	/**
	 * @description Gets the daily transactions grouped by categories given a user, a date range and an optional currency
	 * @param {string} userId - The user ID
	 * @param {Date} start
	 * @param {Date} end
	 * @param {string} currency
	 * @returns {Promise<DailyTransactionByCategoryReportDTO[]>} DTOs with the percentage field set to null
	 */
	public async getDailyTransactionsByCategoriesReport(
		userId: string,
		start: Date,
		end: Date,
		currency?: string
	): Promise<DailyTransactionByCategoryReportDTO[]> {
		const reports: DailyTransactionByCategoryReportDTO[] = (await this.myDatabase.DailyTransaction.aggregate([
			{
				$match: {
					date: {
						$gte: start,
						$lte: end,
					},
					user: {
						$eq: toObjectID(userId),
					},
					currency: {
						$eq: currency,
					},
				},
			},
			{
				$group: {
					_id: '$customCategory',
					amount: {
						$sum: '$amount',
					},
				},
			},
			{
				$lookup: {
					from: 'custom_categories',
					localField: '_id',
					foreignField: '_id',
					as: 'category',
				},
			},
			{
				$project: {
					_id: 1,
					amount: 1,
					category: {
						$arrayElemAt: ['$category', 0],
					},
				},
			},
			{
				$project: {
					_id: {
						$toString: '$_id',
					},
					amount: '$amount',
					name: '$category.name',
				},
			},
		])) as DailyTransactionByCategoryReportDTO[];
		return reports;
	}
}
