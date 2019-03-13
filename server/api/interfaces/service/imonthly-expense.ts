import { IMonthlyExpense, MonthlyExpense } from '../../../common/models/monthly-expense.model';
import { MonthlyExpenseByCategoryReportDTO } from '../../../common/models/report/MonthlyExpenseByCategoryReportDTO';
import { MonthlyExpensesDateReportDTO } from '../../../common/models/report/MonthlyExpensesDateReportDTO';
import { IMonthlyExpenseFilters } from '../../../graphql/types/queries/imonthly-expense.query';
export interface IMonthlyExpenseService {
	createMonthlyExpense(expense: IMonthlyExpense): Promise<MonthlyExpense>;
	editMonthlyExpense(expense: IMonthlyExpense): Promise<MonthlyExpense>;
	removeMonthlyExpense(userId: string, expenseId: string): Promise<MonthlyExpense>;
	totalExpenditureByCategory(criteria: IMonthlyExpenseFilters): Promise<number>;
	disableCustomCategoryExpenses(customCategoryId: string): Promise<MonthlyExpense[]>;
	getMonthlyExpenses(criteria: IMonthlyExpenseFilters): Promise<MonthlyExpense[]>;
	getMonthlyExpensesSum(criteria: IMonthlyExpenseFilters): Promise<number>;
	getDayRecurringExpenses(criteria: IMonthlyExpenseFilters): Promise<number>;
	saveMonthlyExpenseBatch(monthlyExpenses: IMonthlyExpense[]): Promise<MonthlyExpense[]>;
	carryOverMonthlyExpenses(): Promise<MonthlyExpense[]>;
	getMonthlyExpensesByDateReport(userId: string, boundaries: Date[]): Promise<MonthlyExpensesDateReportDTO[]>;

	/**
	 * @description Disables a monthly expense, setting active to false and hasCarriedOver to true
	 * @param {MonthlyExpense} expense - Expense to disable
	 */
	disableMonthlyExpense(userId: string, monthlyExpenseId: string);

	/**
	 * @description Gets the user expenses for a date range and specified categories. Also calculates the percentages and sorts them from
	 * largest to smallest
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
