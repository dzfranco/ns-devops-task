import { toObjectID } from 'iridium';

import { startOfMonth, getMonth, getYear, subHours, addHours } from 'date-fns';

import { injectable, inject } from 'inversify';

import { BSONType } from 'iridium/dist/lib/BSON';

import { IMonthlyExpensePersistence } from '../interfaces/persistence/imonthly-expense.persistence';
import { DATABASE_IDENTIFIER } from '../../common/constants/identifiers';
import { MyDatabaseI } from '../../common/interfaces/imongo';
import { IMonthlyExpense, MonthlyExpense } from '../../common/models/monthly-expense.model';
import { MonthlyExpenseByCategoryReportDTO } from '../../common/models/report/MonthlyExpenseByCategoryReportDTO';
import { MonthlyExpensesDateReportDTO } from '../../common/models/report/MonthlyExpensesDateReportDTO';
import { CURRENCY_US_DOLLAR_ISO } from '../../common/constants/currencies';
import { IMonthlyExpenseFilters } from '../../graphql/types/queries/imonthly-expense.query';

@injectable()
export class MonthlyExpensePersistence implements IMonthlyExpensePersistence {
	private myDatabase: MyDatabaseI;

	constructor(@inject(DATABASE_IDENTIFIER.MYDATABASE) myDatabase: MyDatabaseI) {
		this.myDatabase = myDatabase;
	}

	public async totalExpenditureByCategory(criteria: IMonthlyExpenseFilters): Promise<number> {
		let query = { date: {}, user: toObjectID(criteria.user), customCategory: null };
		if (criteria.startDate) {
			query.date = { ...query.date, $gte: new Date(criteria.startDate) };
		}
		if (criteria.endDate) {
			query.date = { ...query.date, $lte: new Date(criteria.endDate) };
		}
		if (!criteria.startDate && !criteria.endDate) {
			delete query.date;
		}
		if (criteria.customCategory) {
			query = { ...query, customCategory: toObjectID(criteria.customCategory) };
		} else {
			delete query.customCategory;
		}
		const fields = { amount: 1 };
		let sum = 0;
		await this.myDatabase.MonthlyExpense.find(query, fields).forEach(monthlyExpense => {
			sum = sum + monthlyExpense.amount;
		});
		return sum;
	}

	public async getMonthlyExpenses(criteria: IMonthlyExpenseFilters): Promise<MonthlyExpense[]> {
		let query = { date: {}, user: null, active: true, hasCarriedOver: false, customCategory: null };
		if (criteria.user) {
			query.user = toObjectID(criteria.user);
		} else {
			delete query.user;
		}
		if (criteria.forceActive === true || criteria.forceActive === undefined) {
			query.active = true;
		} else {
			delete query.active;
		}
		if (criteria.startDate) {
			query.date = { ...query.date, $gte: new Date(criteria.startDate) };
		}
		if (criteria.endDate) {
			query.date = { ...query.date, $lte: new Date(criteria.endDate) };
		}
		if (!criteria.startDate && !criteria.endDate) {
			delete query.date;
		}
		if (criteria.customCategory) {
			query = { ...query, customCategory: toObjectID(criteria.customCategory) };
		} else {
			delete query.customCategory;
		}
		if (criteria.hasCarriedOver === true || criteria.hasCarriedOver === false) {
			query.hasCarriedOver = criteria.hasCarriedOver;
		} else {
			delete query.hasCarriedOver;
		}
		const expenses = await this.myDatabase.MonthlyExpense.find(query).toArray();
		return expenses;
	}

	public async getUserMonthlyExpense(userId: string, monthlyExpenseId: string): Promise<MonthlyExpense> {
		const query = { user: userId, _id: monthlyExpenseId };
		const foundExpense = await this.myDatabase.MonthlyExpense.get(query);
		return foundExpense;
	}

	/**
	 * @description Creates a monthly expense
	 * @param expense
	 */
	public async createMonthlyExpense(expense: IMonthlyExpense): Promise<MonthlyExpense> {
		const savedExpense = await this.myDatabase.MonthlyExpense.insert(expense);
		return savedExpense;
	}
	/**
	 * @description Saves a monthly expense given the data
	 * @param expense
	 */
	public async editMonthlyExpense(expense: MonthlyExpense): Promise<MonthlyExpense> {
		const savedExpense = await expense.save();
		return savedExpense;
	}

	/**
	 * @description Disables a monthly expense, setting active to false and hasCarriedOver to true
	 * @param {MonthlyExpense} expense - Expense to disable
	 */
	public async disableMonthlyExpense(expense: MonthlyExpense): Promise<MonthlyExpense> {
		expense.active = false;
		expense.hasCarriedOver = true;
		const disabledExpense = await expense.save();
		return disabledExpense;
	}

	/**
	 * @description Deletes a monthly expense
	 * @param expense
	 */
	public async removeMonthlyExpense(expense: MonthlyExpense): Promise<MonthlyExpense> {
		const savedExpense = await expense.delete();
		return savedExpense;
	}

	/**
	 * @description Disables the latest expenses for a cerain cateogry
	 * @param customCategoryId
	 */
	public async disableCustomCategoryExpenses(customCategoryId: string): Promise<MonthlyExpense[]> {
		const query = { customCategory: customCategoryId };
		const foundExpenses = await this.myDatabase.MonthlyExpense.find(query).toArray();
		await this.myDatabase.MonthlyExpense.update(query, { $set: { active: false, hasCarriedOver: true } });
		await this.myDatabase.MonthlyExpense.find(query);
		return foundExpenses;
	}
	/**
	 * @description Removes the expenses corresponding to the current month given a category id
	 * @param customCategoryId
	 */
	public async deleteLatestCustomCategoryExpenses(customCategoryId: string): Promise<number> {
		const start = startOfMonth(new Date());
		const query = { customCategory: toObjectID(customCategoryId), date: { $gte: start } };
		const deletedCategories = await this.myDatabase.MonthlyExpense.remove(query);
		return deletedCategories;
	}

	/**
	 * @description Saves an array of monthly expense like objects
	 * @param monthlyExpenses
	 */
	public async saveMonthlyExpenseBatch(monthlyExpenses: IMonthlyExpense[]): Promise<MonthlyExpense[]> {
		const savedExpenses = await this.myDatabase.MonthlyExpense.insert(monthlyExpenses);
		return savedExpenses;
	}
	/**
	 * @description Gets and carries over the monthly expenses. Updates the "hasCarriedOver" field to prevent
	 * duplicate results when working in cluster
	 * @param criteria - Search criteria for monthly expenses to carry over
	 */
	public async getAndCarryOverMonthlyExpenses(criteria: IMonthlyExpenseFilters): Promise<MonthlyExpense[]> {
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
		const expenses: IMonthlyExpense[] = await this.myDatabase.MonthlyExpense.aggregate<IMonthlyExpense>(
			aggregationQuery
		);
		const convertedExpenses: MonthlyExpense[] = [];
		const ids: BSONType[] = [];
		expenses.forEach(expense => {
			ids.push(expense._id);
			const expenseToPush = new MonthlyExpense(this.myDatabase.MonthlyExpense, expense, false);
			convertedExpenses.push(expenseToPush);
		});
		await this.myDatabase.MonthlyExpense.update({ _id: { $in: ids } }, { $set: { hasCarriedOver: true } });
		return convertedExpenses;
	}

	/**
	 * @description Gets a user's monthly expense separated by boundaries given in the dates array
	 * @param {string} userId - The user id
	 * @param {Date[]} dates - Dates serving as boundaries as described in https://docs.mongodb.com/manual/reference/operator/aggregation/bucket/
	 * for boundaries field
	 */
	public async getMonthlyExpensesByDateReport(
		userId: string,
		dates: Date[]
	): Promise<MonthlyExpensesDateReportDTO[]> {
		const buckets: Array<{ _id: string; spent: number }> = (await this.myDatabase.MonthlyExpense.aggregate([
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
		const reportObjects: MonthlyExpensesDateReportDTO[] = dates.map((date: Date) => {
			const report = new MonthlyExpensesDateReportDTO();
			report.date = startOfMonth(date);
			report.month = getMonth(date);
			report.year = getYear(date);
			report.totalSpent = 0;
			return report;
		});

		// Find the correct bucket and insert data
		buckets.forEach((bucket: { _id: string; spent: number }) => {
			const foundReport = reportObjects.find((report: MonthlyExpensesDateReportDTO) => {
				return report.month === getMonth(new Date(bucket._id)) && report.year === getYear(new Date(bucket._id));
			});
			if (foundReport !== undefined) {
				foundReport.totalSpent = bucket.spent;
			}
		});

		return reportObjects;
	}

	/**
	 * @description Gets the user expenses for a date range and specified categories
	 * @param {string} userId - The user to whom the expenses belong
	 * @param {Date} start - Start date
	 * @param {Date} end - End date
	 * @param {string }currency? - Currency to check expenses
	 */
	public async getMonthlyExpensesByCategoriesReport(
		userId: string,
		start: Date,
		end: Date,
		currency?: string
	): Promise<MonthlyExpenseByCategoryReportDTO[]> {
		/* 
		Stage 1: Matches the conditions (user, dates, currency)
		Stage 2: Groups the elements by category and adds the amounts
		Stage 3, 4: Joins the category object and pulls out the first element (because of 1 to 1 association)
		Stage 5: Just projects the name
		*/
		const reports: MonthlyExpenseByCategoryReportDTO[] = (await this.myDatabase.MonthlyExpense.aggregate([
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
						$eq: currency || CURRENCY_US_DOLLAR_ISO,
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
					_id: '$_id',
					amount: '$amount',
					category: {
						$arrayElemAt: ['$category', 0],
					},
				},
			},
			{
				$project: {
					_id: { $toString: '$_id' },
					amount: '$amount',
					name: '$category.name',
				},
			},
		])) as MonthlyExpenseByCategoryReportDTO[];
		return reports;
	}
}
