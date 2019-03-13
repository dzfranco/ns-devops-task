import { CustomCategory, CustomCategoryDTO } from '../../../common/models/categories/custom-category';
import { DailyTransactionCategoryDTO } from '../../../common/models/categories/daily-transaction-category';
import { ICustomCategory } from '../../../common/models/categories/icustom-category';
import { MonthlyExpenseCategoryDTO } from '../../../common/models/categories/monthly-expense-category';

export interface ICustomCategoryPersistence {
	addCustomCategory(category: ICustomCategory): Promise<CustomCategory>;
	editCustomCategory(category: CustomCategory): Promise<CustomCategory>;
	getUserCategory(categoryId: string, userId: string): Promise<CustomCategory>;
	getAllUserCategories(userId: string, type: string, page: number, limit: number): Promise<CustomCategory[]>;
	/**
	 * @description Gets a custom category given its ID
	 * @param {string} categoryId
	 */
	getCustomCategoryById(categoryId: string): Promise<CustomCategory>;
	removeCustomCategory(category: CustomCategory): Promise<CustomCategory>;
	seedForUsers(userId: string): Promise<CustomCategory[]>;
	/**
	 * @description Gets the daily transaction categories given a user id
	 * @param {string} userId - The user's ID
	 * @param {Date} startDate - Start of date range to get the categories
	 * @param {Date} endDate - End of date range to get the categories
	 */
	getDailyTransactionCategories(
		userId: string,
		startDate: Date,
		endDate: Date
	): Promise<DailyTransactionCategoryDTO[]>;
	/**
	 * @description Gets the daily transaction categories given a user id
	 * @param {string} userId - The user's ID
	 * @param {Date} startDate - Start of date range to get the categories
	 * @param {Date} endDate - End of date range to get the categories
	 * @param {number} page - Page to query
	 * @param {number} limit - Elements per page
	 */
	getMonthlyExpensesCategories(
		userId: string,
		startDate: Date,
		endDate: Date,
		page: number,
		limit: number
	): Promise<MonthlyExpenseCategoryDTO[]>;

	/**
	 * @description Gets a custom category list with the total expenditure on the total field given a date period.
	 * Extracts data from daily transactions and monthly expenses
	 * @param  {string} userId - The user to whom the categories belong
	 * @param  {Date} start - Start of the date period
	 * @param  {Date} end - End of the date period
	 * @return Promise<CustomCategoryDTO[]> - A promise with the list of custom categories
	 */
	getTotalSpenditureByDateCategories(userId: string, start: Date, end: Date): Promise<CustomCategoryDTO[]>;
}
