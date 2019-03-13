import { IMonthlyExpense, MonthlyExpense } from '../../../common/models/monthly-expense.model';
import { MonthlyExpenseByCategoryReportDTO } from '../../../common/models/report/MonthlyExpenseByCategoryReportDTO';
import { MonthlyExpensesDateReportDTO } from '../../../common/models/report/MonthlyExpensesDateReportDTO';
import { IMonthlyExpenseFilters } from '../../../graphql/types/queries/imonthly-expense.query';
export interface IMonthlyExpensePersistence {
	createMonthlyExpense(expense: IMonthlyExpense): Promise<MonthlyExpense>;
	editMonthlyExpense(expense: MonthlyExpense): Promise<MonthlyExpense>;
	removeMonthlyExpense(expense: MonthlyExpense): Promise<MonthlyExpense>;
	totalExpenditureByCategory(criteria: IMonthlyExpenseFilters): Promise<number>;
	disableCustomCategoryExpenses(customCategoryId: string): Promise<MonthlyExpense[]>;
	getMonthlyExpenses(criteria: IMonthlyExpenseFilters): Promise<MonthlyExpense[]>;
	getUserMonthlyExpense(userId: string, expenseId: string): Promise<MonthlyExpense>;
	saveMonthlyExpenseBatch(monthlyExpenses: IMonthlyExpense[]): Promise<MonthlyExpense[]>;

	/**
	 * @description Disables a monthly expense, setting active to false and hasCarriedOver to true
	 * @param {MonthlyExpense} expense - Expense to disable
	 */
	disableMonthlyExpense(expense: MonthlyExpense): Promise<MonthlyExpense>;

	/**
	 * @description Removes the expenses corresponding to the current month given a category id
	 * @param customCategoryId
	 */
	deleteLatestCustomCategoryExpenses(customCategoryId: string): Promise<number>;

	/**
	 * @description Gets and carries over the monthly expenses. Updates the "hasCarriedOver" field to prevent
	 * duplicate results when working in cluster
	 * @param criteria - Search criteria for monthly expenses to carry over
	 */
	getAndCarryOverMonthlyExpenses(criteria: IMonthlyExpenseFilters): Promise<MonthlyExpense[]>;

	/**
	 * @description Gets a user's monthly expense separated by boundaries given in the dates array
	 * @param {string} userId - The user id
	 * @param {Date[]} dates - Dates serving as boundaries as described in https://docs.mongodb.com/manual/reference/operator/aggregation/bucket/
	 * for boundaries field
	 */
	getMonthlyExpensesByDateReport(userId: string, dates: Date[]): Promise<MonthlyExpensesDateReportDTO[]>;

	/**
	 * @description Gets the user expenses for a date range and specified categories
	 * @param {string} userId - The user to whom the expenses belong
	 * @param {Date} start - Start date
	 * @param {Date} end - End date
	 * @param {string }currency? - Currency to check expenses
	 */
	getMonthlyExpensesByCategoriesReport(
		userId: string,
		start: Date,
		end: Date,
		currency?: string
	): Promise<MonthlyExpenseByCategoryReportDTO[]>;
}
