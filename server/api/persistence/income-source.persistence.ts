import { toObjectID } from 'iridium';

import { injectable, inject } from 'inversify';

import { BSONType } from 'iridium/dist/lib/BSON';

import { IIncomeSourcePersistence } from '../interfaces/persistence/iincome-source.persistence';
import { DATABASE_IDENTIFIER } from '../../common/constants/identifiers';
import { MyDatabaseI } from '../../common/interfaces/imongo';
import { IIncomeSource, IncomeSource } from '../../common/models/income-source';
import { IncomeSourceFilters } from '../../graphql/types/input/income-source';
import { IncomeSourceDatesReportDTO } from '../../common/models/report/IncomeSourceDatesReportDTO';
import { startOfMonth, getMonth, getYear, subHours, addHours } from 'date-fns';
import { Query } from 'type-graphql';
import { CURRENCY_US_DOLLAR_ISO } from '../../common/constants/currencies';

@injectable()
export class IncomeSourcePersistence implements IIncomeSourcePersistence {
	private myDatabase: MyDatabaseI;
	constructor(@inject(DATABASE_IDENTIFIER.MYDATABASE) myDatabase) {
		this.myDatabase = myDatabase;
	}

	public async editIncomeSources(data: IncomeSource): Promise<IncomeSource> {
		const savedIncomeSource = await data.save();
		return savedIncomeSource;
	}

	/**
	 * @description Disables an income source not to carry over
	 * @param data
	 */
	public async disableIncomeSource(data: IncomeSource): Promise<IncomeSource> {
		data.active = false;
		data.hasCarriedOver = true;
		const savedIncomeSource = await data.save();
		return savedIncomeSource;
	}

	/**
	 * @description Deletes an income source object
	 * @param {IncomeSource} incomeSource - The income source object to delete
	 */
	public async deleteIncomeSource(incomeSource: IncomeSource): Promise<IncomeSource> {
		const deletedIncomeSource = await incomeSource.delete();
		return deletedIncomeSource;
	}

	/**
	 * @description Disables all the income sources belonging to a certain custom category
	 * @param customCategoryId
	 */
	public async disableCustomCategoryIncomeSources(customCategoryId: string): Promise<IncomeSource[]> {
		const query = { customCategory: customCategoryId };
		const foundIncomeSources = await this.myDatabase.IncomeSource.find(query).toArray();
		await this.myDatabase.MonthlyExpense.update(query, { $set: { active: false, hasCarriedOver: true } });
		await this.myDatabase.MonthlyExpense.find(query);
		return foundIncomeSources;
	}

	/**
	 * @description Removes the income sources corresponding to the current month given a category id
	 * @param customCategoryId
	 */
	public async deleteLatestCustomCategoryIncomeSources(customCategoryId: string): Promise<number> {
		const start = startOfMonth(new Date());
		const query = { customCategory: toObjectID(customCategoryId), date: { $gte: start } };
		const deletedCategories = await this.myDatabase.IncomeSource.remove(query);
		return deletedCategories;
	}

	public async getIncomeSource(userId: string, incomeSourceId: string): Promise<IncomeSource> {
		const query = { user: userId, _id: incomeSourceId };
		const foundIncomeSource = await this.myDatabase.IncomeSource.get(query);
		return foundIncomeSource;
	}

	public async createIncomeSource(data: IIncomeSource): Promise<IncomeSource> {
		const savedIncomeSource = await this.myDatabase.IncomeSource.insert(data);
		return savedIncomeSource;
	}

	/**
	 * @description Gets the user's income sources given the criteria
	 * @param userId
	 * @param filters
	 */
	public async getUsersIncomeSources(userId: string, filters?: IncomeSourceFilters): Promise<IncomeSource[]> {
		const query = { user: toObjectID(userId), customCategory: null, date: {}, currency: CURRENCY_US_DOLLAR_ISO };
		if (filters) {
			if (filters.customCategory) {
				query.customCategory = filters.customCategory;
			} else {
				delete query.customCategory;
			}
			if (filters.startDate === undefined && filters.endDate === undefined) {
				delete query.date;
			} else {
				if (filters.startDate) {
					query.date = { $gte: new Date(filters.startDate), ...query.date };
				}
				if (filters.endDate) {
					query.date = { $lte: new Date(filters.endDate), ...query.date };
				}
			}
			if (filters.currency) {
				query.currency = filters.currency;
			}
		}
		const incomeSources = await this.myDatabase.IncomeSource.find(query).toArray();
		return incomeSources;
	}

	/**
	 * @description Saves monthly expenses in batch
	 * @param monthlyExpenses
	 */
	public async saveIncomeSourcesBatch(monthlyExpenses: IIncomeSource[]): Promise<IncomeSource[]> {
		const savedExpenses = await this.myDatabase.IncomeSource.insert(monthlyExpenses);
		return savedExpenses;
	}

	/**
	 * @description Gets and carries over the income sources. Updates the "hasCarriedOver" field to prevent
	 * duplicate results when working in cluster
	 * @param criteria - Search criteria for income sources to carry over
	 */
	public async getAndCarryOverIncomeSources(criteria: IncomeSourceFilters): Promise<IncomeSource[]> {
		const month = getMonth(criteria.startDate) + 1;
		const year = getYear(criteria.startDate);
		// Add and subtract the greatest timezone offsets to get all the possible elements
		criteria.startDate = subHours(criteria.startDate, 13);
		criteria.endDate = addHours(criteria.endDate, 14);
		const aggregationQuery = [
			{
				$match: {
					$expr: {
						$and: [
							{
								$gte: ['$date', criteria.startDate],
							},
							{
								$lte: ['$date', criteria.endDate],
							},
							{ $eq: ['$active', true] },
							{ $eq: ['$hasCarriedOver', false] },
						],
					},
				},
			},
			{
				$addFields: {
					month: {
						$month: {
							date: '$date',
							timezone: '$timezone',
						},
					},
					year: {
						$year: {
							date: '$date',
							timezone: '$timezone',
						},
					},
				},
			},
			{
				$match: {
					month: month,
					year: year,
				},
			},
		];
		const incomeSources: IIncomeSource[] = await this.myDatabase.IncomeSource.aggregate<IIncomeSource>(
			aggregationQuery
		);
		const convertedExpenses: IncomeSource[] = [];
		const ids: BSONType[] = [];
		incomeSources.forEach(expense => {
			ids.push(expense._id);
			const expenseToPush = new IncomeSource(this.myDatabase.IncomeSource, expense, false);
			convertedExpenses.push(expenseToPush);
		});
		await this.myDatabase.IncomeSource.update({ _id: { $in: ids } }, { $set: { hasCarriedOver: true } });
		return convertedExpenses;
	}

	/**
	 * @description Gets a user's income sources report separated by the boundaries given in the dates array
	 * @param {string} userId - The user id
	 * @param {Date[]} dates - Dates serving as boundaries as described in https://docs.mongodb.com/manual/reference/operator/aggregation/bucket/
	 * for boundaries field
	 * @returns {Promise<IncomeSourceDatesReportDTO[]>} The reports separated by date
	 */
	public async getIncomeSourcesByDatesReport(userId: string, dates: Date[]): Promise<IncomeSourceDatesReportDTO[]> {
		interface IncomeAggregationInput {
			_id: string;
			grossIncome: number;
			taxes: number;
		}
		const buckets: IncomeAggregationInput[] = (await this.myDatabase.IncomeSource.aggregate([
			{
				$match: {
					user: toObjectID(userId),
				},
			},
			{
				$addFields: {
					taxes: {
						$multiply: ['$taxPercentage', '$amount', 0.01],
					},
				},
			},
			{
				$bucket: {
					groupBy: '$date',
					boundaries: dates,
					default: 'uncategorized',
					output: {
						grossIncome: {
							$sum: '$amount',
						},
						taxes: {
							$sum: '$taxes',
						},
					},
				},
			},
		])) as IncomeAggregationInput[];

		// Create initial objects because we don't know if mongo will give us the same amount of buckets
		const reportObjects: IncomeSourceDatesReportDTO[] = dates.map((date: Date) => {
			const report = new IncomeSourceDatesReportDTO();
			report.date = startOfMonth(date);
			report.month = getMonth(date);
			report.year = getYear(date);
			report.grossIncome = 0;
			report.taxes = 0;
			report.adjustedIncome = 0;
			return report;
		});

		// Find the correct bucket and insert data
		buckets.forEach((bucket: IncomeAggregationInput) => {
			const foundReport = reportObjects.find((report: IncomeSourceDatesReportDTO) => {
				return report.month === getMonth(new Date(bucket._id)) && report.year === getYear(new Date(bucket._id));
			});
			if (foundReport !== undefined) {
				foundReport.grossIncome = bucket.grossIncome;
				foundReport.taxes = bucket.taxes;
				foundReport.adjustedIncome = bucket.grossIncome - bucket.taxes;
			}
		});

		return reportObjects;
	}
}
