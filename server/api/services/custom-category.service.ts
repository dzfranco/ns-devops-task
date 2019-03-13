import { injectable, inject } from 'inversify';

import { ICustomCategoryPersistence } from '../interfaces/persistence/icustom-category.persistence';
import { ICustomCategoryService } from '../interfaces/service/icustom-category';
import { IIncomeSourceService } from '../interfaces/service/iincome-source';
import { IMonthlyExpenseService } from '../interfaces/service/imonthly-expense';
import { BASE_CATEGTORY_TYPES } from '../../common/constants/base-categories';
import { PERSISTENCE_IDENTIFIERS, DATABASE_IDENTIFIER, SERVICE_IDENTIFIER } from '../../common/constants/identifiers';
import { CustomCategory, CustomCategoryDTO } from '../../common/models/categories/custom-category';
import { DailyTransactionCategoryDTO } from '../../common/models/categories/daily-transaction-category';
import { ICustomCategory } from '../../common/models/categories/icustom-category';
import { MonthlyExpenseCategoryDTO } from '../../common/models/categories/monthly-expense-category';
import { IDailyTransactionService } from '../interfaces/service/idaily-transaction';

@injectable()
export class CustomCategoryService implements ICustomCategoryService {
	private customCategoryPersistance: ICustomCategoryPersistence;
	private dailyTransactionService: IDailyTransactionService;
	private monthlyExpenseService: IMonthlyExpenseService;
	private incomeSourceService: IIncomeSourceService;
	constructor(
		@inject(PERSISTENCE_IDENTIFIERS.CUSTOM_CATEGORY) customCategoryPersistance: ICustomCategoryPersistence,
		@inject(SERVICE_IDENTIFIER.DAILY_TRANSACTION) dailyTransactionService: IDailyTransactionService,
		@inject(SERVICE_IDENTIFIER.MONTHLY_EXPENSE) monthlyExpenseService: IMonthlyExpenseService,
		@inject(SERVICE_IDENTIFIER.INCOME_SOURCE) incomeSourceService: IIncomeSourceService
	) {
		this.dailyTransactionService = dailyTransactionService;
		this.customCategoryPersistance = customCategoryPersistance;
		this.monthlyExpenseService = monthlyExpenseService;
		this.incomeSourceService = incomeSourceService;
	}
	/**
	 * @description Seeds the user with the base categories
	 * @param userId - The user to whom the categories will be added
	 */
	public async seedForUser(userId: string): Promise<CustomCategory[]> {
		const seededCategories = await this.customCategoryPersistance.seedForUsers(userId);
		return seededCategories;
	}

	/**
	 * @description Gets a user's custom categories
	 * @param userId - The user
	 * @param {string} type - The type of category to search
	 */
	public async getAllUserCategories(
		userId: string,
		type: string,
		page?: number,
		limit?: number
	): Promise<CustomCategory[]> {
		const foundCategories = await this.customCategoryPersistance.getAllUserCategories(userId, type, page, limit);
		return foundCategories;
	}

	/**
	 * @description Gets a custom category given its ID
	 * @param {string} categoryId
	 */
	public async getCustomCategoryById(categoryId: string): Promise<CustomCategory> {
		return this.customCategoryPersistance.getCustomCategoryById(categoryId);
	}

	/**
	 * @description Gets the total spent by category
	 * @param {string} categoryId - The category Id
	 * @param {date} startDate - Start Date
	 * @param {date} endDate - End Date
	 */
	public async getTotalByCategory(categoryId: string, startDate: Date, endDate: Date): Promise<number> {
		const category: CustomCategory = await this.getCustomCategoryById(categoryId);
		if (!category) {
			throw new Error('Category not found');
		}
		switch (category.type) {
			case BASE_CATEGTORY_TYPES.MONTHLY:
				const monthlyFilters = { startDate, endDate, user: category.user, customCategory: category._id };
				return this.monthlyExpenseService.getMonthlyExpensesSum(monthlyFilters);
			case BASE_CATEGTORY_TYPES.DAILY:
				const dailyFilters = { startDate, endDate, user: category.user, customCategory: category._id };
				return this.dailyTransactionService.getDailyTransactionsSum(dailyFilters);
			case BASE_CATEGTORY_TYPES.INCOME:
				const incomeFilters = { startDate, endDate, user: category.user, customCategory: category._id };
				return this.incomeSourceService.getIncomeSourcesSum(incomeFilters);
			default:
				return 0;
		}
	}

	/**
	 * @description Adds a new category
	 * @param {ICustomCategory} category - Category base object to add
	 */
	public async addCustomCategory(category: ICustomCategory): Promise<CustomCategory> {
		const customCategory = await this.customCategoryPersistance.addCustomCategory(category);
		return customCategory;
	}

	/**
	 * @description Edits a custom category if and only if it belongs to the user
	 * @param {ICustomCategory} category - Category with user and _id fields set.
	 */
	public async editCustomCategory(category: ICustomCategory): Promise<CustomCategory> {
		const foundCategory = await this.customCategoryPersistance.getUserCategory(category._id, category.user);
		if (foundCategory === null) {
			throw new Error('Category not found');
		}
		for (const key in category) {
			if (category[key] !== undefined) {
				foundCategory[key] = category[key];
			}
		}

		const editedCategory = await this.customCategoryPersistance.editCustomCategory(foundCategory);
		return editedCategory;
	}

	/**
	 * @description Soft deletes a custom category. Meaning it only sets the active field to false.
	 * This will only work if the category belongs to the user
	 * @param {string} categoryId - The id of the category to delete
	 * @param {string} userId  - The user that sends the request
	 */
	public async removeCustomCategory(categoryId: string, userId: string): Promise<CustomCategory> {
		const foundCategory = await this.customCategoryPersistance.getUserCategory(categoryId, userId);
		if (foundCategory === null) {
			throw new Error('Category not found');
		}
		const deletedCategory = await this.customCategoryPersistance.removeCustomCategory(foundCategory);
		switch (foundCategory.type) {
			case BASE_CATEGTORY_TYPES.MONTHLY:
				await this.monthlyExpenseService.disableCustomCategoryExpenses(foundCategory._id);
			case BASE_CATEGTORY_TYPES.INCOME:
				await this.incomeSourceService.disableCustomCategoryIncomeSources(foundCategory._id);
		}
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
		const categories = await this.customCategoryPersistance.getDailyTransactionCategories(
			userId,
			startDate,
			endDate
		);
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
		const categories = await this.customCategoryPersistance.getMonthlyExpensesCategories(
			userId,
			startDate,
			endDate,
			page,
			limit
		);
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
		return this.customCategoryPersistance.getTotalSpenditureByDateCategories(userId, start, end);
	}
}
