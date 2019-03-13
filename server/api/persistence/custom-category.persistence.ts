import * as _ from 'lodash';
import { toObjectID } from 'iridium';
import { injectable, inject } from 'inversify';
import { plainToClass } from 'class-transformer';

import { ICustomCategoryPersistence } from '../interfaces/persistence/icustom-category.persistence';
import { BASE_CATEGTORY_TYPES } from '../../common/constants/base-categories';
import { DATABASE_IDENTIFIER } from '../../common/constants/identifiers';
import { MyDatabaseI } from '../../common/interfaces/imongo';
import { CustomCategory, CustomCategoryDTO } from '../../common/models/categories/custom-category';
import { DailyTransactionCategoryDTO } from '../../common/models/categories/daily-transaction-category';
import { ICustomCategory } from '../../common/models/categories/icustom-category';
import { MonthlyExpenseCategoryDTO } from '../../common/models/categories/monthly-expense-category';

@injectable()
export class CustomCategoryPersistence implements ICustomCategoryPersistence {
	private myDatabase: MyDatabaseI;
	private readonly BASE_CATEGORIES: ICustomCategory[] = [
		{
			name: 'Salary',
			type: BASE_CATEGTORY_TYPES.INCOME,
			user: null,
			active: true,
			createdAt: null,
			updatedAt: null,
		},
		{
			name: 'Food & Drink',
			type: BASE_CATEGTORY_TYPES.DAILY,
			user: null,
			active: true,
			createdAt: null,
			updatedAt: null,
		},
		{
			name: 'Shopping',
			type: BASE_CATEGTORY_TYPES.DAILY,
			user: null,
			active: true,
			createdAt: null,
			updatedAt: null,
		},
		{
			name: 'Services',
			type: BASE_CATEGTORY_TYPES.DAILY,
			user: null,
			active: true,
			createdAt: null,
			updatedAt: null,
		},
		{
			name: 'Fun',
			type: BASE_CATEGTORY_TYPES.DAILY,
			user: null,
			active: true,
			createdAt: null,
			updatedAt: null,
		},
		{
			name: 'Getting Around',
			type: BASE_CATEGTORY_TYPES.DAILY,
			user: null,
			active: true,
			createdAt: null,
			updatedAt: null,
		},
	];

	constructor(@inject(DATABASE_IDENTIFIER.MYDATABASE) myDatabase: MyDatabaseI) {
		this.myDatabase = myDatabase;
	}

	public async seedForUsers(userId: string): Promise<CustomCategory[]> {
		const customCategories = this.BASE_CATEGORIES.map((category: ICustomCategory) => {
			category.user = userId;
			return category;
		});
		const insertedCategories = await this.myDatabase.CustomCategory.insert(customCategories);
		return insertedCategories;
	}

	public async addCustomCategory(category: ICustomCategory): Promise<CustomCategory> {
		const customCategory = await this.myDatabase.CustomCategory.insert(category);
		return customCategory;
	}

	public async getUserCategory(categoryId: string, userId: string): Promise<CustomCategory> {
		const category = await this.myDatabase.CustomCategory.get({ _id: categoryId, user: userId });
		return category;
	}

	/**
	 * @description Gets a custom category given its ID
	 * @param {string} categoryId
	 */
	public async getCustomCategoryById(categoryId: string): Promise<CustomCategory> {
		const category = await this.myDatabase.CustomCategory.get({ _id: toObjectID(categoryId) });
		return category;
	}

	public async getAllUserCategories(
		userId: string,
		type: string,
		page: number = 1,
		limit: number = 0
	): Promise<CustomCategory[]> {
		const query = { user: userId, type };
		const sorting = { name: 1 };
		const foundCategories = await this.myDatabase.CustomCategory.find(query)
			.sort(sorting)
			.skip((page - 1) * limit)
			.limit(limit)
			.toArray();
		return foundCategories;
	}

	public async editCustomCategory(category: CustomCategory): Promise<CustomCategory> {
		return category.save();
	}

	public async removeCustomCategory(category: CustomCategory): Promise<CustomCategory> {
		category.active = false;
		const deletedCategory = await category.save();
		return deletedCategory;
	}

	/**
	 * @description Gets the daily transaction categories given a user id
	 * @param {string} userId - The user's ID
	 * @param {Date} startDate - Start of date range to get the categories
	 * @param {Date} endDate - End of date range to get the categories
	 */
	public async getDailyTransactionCategories(
		userId: string,
		startDate: Date,
		endDate: Date
	): Promise<DailyTransactionCategoryDTO[]> {
		const pipeline = [];
		const matchStage = {
			$match: {
				user: toObjectID(userId),
				type: BASE_CATEGTORY_TYPES.DAILY,
			},
		};
		const lookupStage = {
			$lookup: {
				from: 'daily_transactions',
				localField: '_id',
				foreignField: 'customCategory',
				as: 'dailyTransactions',
			},
		};
		pipeline.push(matchStage, lookupStage);

		if (!_.isNil(startDate) || !_.isNil(endDate)) {
			const conditions = [];
			if (!_.isNil(startDate)) {
				conditions.push({ $gte: ['$$item.date', startDate] });
			}
			if (!_.isNil(endDate)) {
				conditions.push({ $lte: ['$$item.date', endDate] });
			}
			const projectStage = {
				$project: {
					_id: 1,
					user: 1,
					name: 1,
					type: 1,
					active: 1,
					createdAt: 1,
					updatedAt: 1,
					dailyTransactions: {
						$filter: {
							input: '$dailyTransactions',
							as: 'item',
							cond: {
								$and: conditions,
							},
						},
					},
				},
			};
			pipeline.push(projectStage);
		}
		const categories: DailyTransactionCategoryDTO[] = await this.myDatabase.CustomCategory.aggregate<
			DailyTransactionCategoryDTO
		>(pipeline).map((object: DailyTransactionCategoryDTO) => {
			return plainToClass(DailyTransactionCategoryDTO, object as DailyTransactionCategoryDTO);
		});
		return categories;
	}

	/**
	 * @description Gets the daily transaction categories given a user id
	 * @param {string} userId - The user's ID
	 * @param {Date} startDate - Start of date range to get the categories
	 * @param {Date} endDate - End of date range to get the categories
	 * @param {number} page - Page to query
	 * @param {number} limit - Elements per page
	 */
	public async getMonthlyExpensesCategories(
		userId: string,
		startDate: Date,
		endDate: Date,
		page: number,
		limit: number
	): Promise<MonthlyExpenseCategoryDTO[]> {
		const pipeline = [];
		const matchStage = {
			$match: {
				user: toObjectID(userId),
				type: BASE_CATEGTORY_TYPES.MONTHLY,
			},
		};
		const lookupStage = {
			$lookup: {
				from: 'monthly_expenses',
				localField: '_id',
				foreignField: 'customCategory',
				as: 'monthlyExpenses',
			},
		};

		pipeline.push(matchStage, lookupStage);

		if (!_.isNil(startDate) || !_.isNil(endDate)) {
			const conditions = [];
			if (!_.isNil(startDate)) {
				conditions.push({ $gte: ['$$item.date', startDate] });
			}
			if (!_.isNil(endDate)) {
				conditions.push({ $lte: ['$$item.date', endDate] });
			}
			const projectStage = {
				$project: {
					_id: 1,
					user: 1,
					name: 1,
					type: 1,
					active: 1,
					createdAt: 1,
					updatedAt: 1,
					monthlyExpenses: {
						$filter: {
							input: '$monthlyExpenses',
							as: 'item',
							cond: {
								$and: conditions,
							},
						},
					},
				},
			};
			pipeline.push(projectStage);
		}

		const skipStage = {
			$skip: (page - 1) * limit,
		};
		const limitStage = {
			$limit: limit,
		};
		pipeline.push(skipStage);
		pipeline.push(limitStage);
		const categories: MonthlyExpenseCategoryDTO[] = await this.myDatabase.CustomCategory.aggregate<
			MonthlyExpenseCategoryDTO
		>(pipeline).map((object: MonthlyExpenseCategoryDTO) => {
			return plainToClass(MonthlyExpenseCategoryDTO, object as MonthlyExpenseCategoryDTO);
		});
		return categories;
	}

	/**
	 * @description Gets a custom category list with the total expenditure on the total field given a date period.
	 * Extracts data from daily transactions and monthly expenses
	 * @param  {string} userId - The user to whom the categories belong
	 * @param  {Date} start - Start of the date period
	 * @param  {Date} end - End of the date period
	 * @return Promise<CustomCategoryDTO[]> - A promise with the list of custom categories
	 */
	public async getTotalSpenditureByDateCategories(
		userId: string,
		start: Date,
		end: Date
	): Promise<CustomCategoryDTO[]> {
		const unconvertedDTOs = await this.myDatabase.CustomCategory.aggregate([
			{
				$match: {
					$and: [
						{
							user: toObjectID(userId),
						},
						{
							active: true,
						},
						{
							$or: [
								{
									type: 'monthly',
								},
								{
									type: 'daily',
								},
							],
						},
					],
				},
			},
			{
				$lookup: {
					from: 'daily_transactions',
					let: {
						category_id: '$_id',
					},
					pipeline: [
						{
							$match: {
								$expr: {
									$and: [
										{
											$eq: ['$customCategory', '$$category_id'],
										},
										{
											$gte: ['$date', start],
										},
										{
											$lte: ['$date', end],
										},
									],
								},
							},
						},
					],
					as: 'transactions',
				},
			},
			{
				$lookup: {
					from: 'monthly_expenses',
					let: {
						category_id: '$_id',
					},
					pipeline: [
						{
							$match: {
								$expr: {
									$and: [
										{
											$eq: ['$customCategory', '$$category_id'],
										},
										{
											$gte: ['$date', start],
										},
										{
											$lte: ['$date', end],
										},
									],
								},
							},
						},
					],
					as: 'expenses',
				},
			},
			{
				$project: {
					_id: 1,
					user: 1,
					type: 1,
					active: 1,
					name: 1,
					total: {
						$cond: {
							if: {
								$eq: ['$type', 'daily'],
							},
							then: {
								$reduce: {
									input: '$transactions',
									initialValue: 0,
									in: {
										$add: ['$$value', '$$this.amount'],
									},
								},
							},
							else: {
								$reduce: {
									input: '$expenses',
									initialValue: 0,
									in: {
										$add: ['$$value', '$$this.amount'],
									},
								},
							},
						},
					},
					createdAt: 1,
					updatedAt: 1,
				},
			},
		]);
		const convertedDTOS = plainToClass(CustomCategoryDTO, unconvertedDTOs);
		return convertedDTOS;
	}
}
