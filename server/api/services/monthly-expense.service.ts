import { ObjectId } from 'bson';

import { getDaysInMonth, startOfMonth, endOfMonth, subMonths, addMonths } from 'date-fns';

import { injectable, inject } from 'inversify';

import { plainToClass } from 'class-transformer';

import { ICustomCategoryPersistence } from '../interfaces/persistence/icustom-category.persistence';
import { IMonthlyExpensePersistence } from '../interfaces/persistence/imonthly-expense.persistence';
import { IMonthlyExpenseService } from '../interfaces/service/imonthly-expense';
import { PERSISTENCE_IDENTIFIERS, SERVICE_IDENTIFIER } from '../../common/constants/identifiers';
import { IMonthlyExpense, MonthlyExpense } from '../../common/models/monthly-expense.model';
import { IDatesHelperService } from '../interfaces/service/helpers/idates-helper';
import { MonthlyExpenseByCategoryReportDTO } from '../../common/models/report/MonthlyExpenseByCategoryReportDTO';
import { MonthlyExpensesDateReportDTO } from '../../common/models/report/MonthlyExpensesDateReportDTO';
import { IMonthlyExpenseFilters } from '../../graphql/types/queries/imonthly-expense.query';

@injectable()
export class MonthlyExpenseService implements IMonthlyExpenseService {
	private monthlyExpensePersistence: IMonthlyExpensePersistence;
	private customCategoryPersistence: ICustomCategoryPersistence;
	constructor(
		@inject(PERSISTENCE_IDENTIFIERS.MONTHLY_EXPENSE) monthlyExpensePersistence: IMonthlyExpensePersistence,
		@inject(PERSISTENCE_IDENTIFIERS.CUSTOM_CATEGORY) customCategoryPersistence: ICustomCategoryPersistence,
		@inject(SERVICE_IDENTIFIER.DATES_HELPER) datesHelperService: IDatesHelperService
	) {
		this.customCategoryPersistence = customCategoryPersistence;
		this.monthlyExpensePersistence = monthlyExpensePersistence;
	}
	public async totalExpenditureByCategory(criteria: IMonthlyExpenseFilters): Promise<number> {
		const totalExpenditure = await this.monthlyExpensePersistence.totalExpenditureByCategory(criteria);
		return totalExpenditure;
	}

	public async editMonthlyExpense(expense: IMonthlyExpense): Promise<MonthlyExpense> {
		const foundExpense = await this.monthlyExpensePersistence.getUserMonthlyExpense(
			expense.user.toString(),
			expense._id
		);
		if (foundExpense === null) {
			throw new Error('Monthly Expense not found');
		}
		const foundCategory = await this.customCategoryPersistence.getUserCategory(
			expense.customCategory.toString(),
			expense.user.toString()
		);
		if (!foundCategory) {
			throw new Error('Custom Category not found');
		}

		for (const key in expense) {
			if (key !== undefined) {
				foundExpense[key] = expense[key];
			}
		}
		const savedExpense = await this.monthlyExpensePersistence.editMonthlyExpense(foundExpense);
		return savedExpense;
	}

	/**
	 * @description Disables a monthly expense, setting active to false and hasCarriedOver to true
	 * @param {string} userId - User ID
	 * @param {string} monthlyExpenseId - User ID
	 */
	public async disableMonthlyExpense(userId: string, monthlyExpenseId: string): Promise<MonthlyExpense> {
		const foundExpense = await this.monthlyExpensePersistence.getUserMonthlyExpense(userId, monthlyExpenseId);
		if (foundExpense === null) {
			throw new Error('Monthly Expense not found');
		}
		const disabledExpense = await this.monthlyExpensePersistence.disableMonthlyExpense(foundExpense);
		return disabledExpense;
	}

	/**
	 * @description Removes a monthly expense after validating it belongs to the user
	 * @param {IMonthlyExpense} expense
	 */
	public async removeMonthlyExpense(userId: string, expenseId: string): Promise<MonthlyExpense> {
		const foundExpense = await this.monthlyExpensePersistence.getUserMonthlyExpense(userId, expenseId);
		if (foundExpense === null) {
			throw new Error('Monthly Expense not found');
		}
		const removedExpesne = await this.monthlyExpensePersistence.removeMonthlyExpense(foundExpense);
		return removedExpesne;
	}

	/**
	 * @description Gets monthly expenses given the search criteria
	 * @param criteria
	 */
	public async getMonthlyExpenses(criteria: IMonthlyExpenseFilters): Promise<MonthlyExpense[]> {
		const monthlyExpenses = await this.monthlyExpensePersistence.getMonthlyExpenses(criteria);
		return monthlyExpenses;
	}
	/**
	 * @description Gets the day recurring expenses
	 * @param criteria
	 */
	public async getDayRecurringExpenses(criteria: IMonthlyExpenseFilters): Promise<number> {
		let date: Date;
		criteria.startDate ? (date = criteria.startDate) : (date = new Date());

		criteria.startDate = startOfMonth(date);
		criteria.endDate = endOfMonth(date);
		const monthlyExpenseObjects = await this.getMonthlyExpenses(criteria);
		let monthlyExpenses = 0;
		monthlyExpenseObjects.forEach(expense => (monthlyExpenses += expense.amount));
		const daysInMonth = getDaysInMonth(new Date());
		const recurringExpenses = monthlyExpenses / daysInMonth;
		return Number.parseFloat(recurringExpenses.toFixed(2));
	}
	/**
	 * @description Gets the monthly expenses sum according to the criteria
	 * @param criteria
	 */
	public async getMonthlyExpensesSum(criteria: IMonthlyExpenseFilters): Promise<number> {
		const monthlyExpenseObjects = await this.getMonthlyExpenses(criteria);
		let monthlyExpenses = 0;
		monthlyExpenseObjects.forEach(expense => (monthlyExpenses += expense.amount));
		return monthlyExpenses;
	}

	/**
	 * @description Creates a new Monthly Expense
	 * @param expense
	 */
	public async createMonthlyExpense(expense: IMonthlyExpense): Promise<MonthlyExpense> {
		const foundCategory = await this.customCategoryPersistence.getUserCategory(
			expense.customCategory.toString(),
			expense.user.toString()
		);
		if (!foundCategory) {
			throw new Error('Custom Category not found');
		}
		const savedExpense = await this.monthlyExpensePersistence.createMonthlyExpense(expense);
		return savedExpense;
	}
	/**
	 * @description Removes all the expenses belonging to a custom category
	 * @param customCategoryId
	 */
	public async disableCustomCategoryExpenses(customCategoryId: string): Promise<MonthlyExpense[]> {
		const deletedCategories = await this.monthlyExpensePersistence.deleteLatestCustomCategoryExpenses(
			customCategoryId
		);
		const disabledExpenses = await this.monthlyExpensePersistence.disableCustomCategoryExpenses(customCategoryId);
		return disabledExpenses;
	}
	/**
	 * @description Saves a batch of monthly expenses
	 * @param {IMonthlyExpense[]} monthlyExpenses
	 */
	public async saveMonthlyExpenseBatch(monthlyExpenses: IMonthlyExpense[]): Promise<MonthlyExpense[]> {
		const savedExpenses = await this.monthlyExpensePersistence.saveMonthlyExpenseBatch(monthlyExpenses);
		return savedExpenses;
	}

	/**
	 * @description Carries over the active monthly expenses for every user. It also changed the carried over
	 * field so that they won't be carried over more than once
	 */
	public async carryOverMonthlyExpenses(): Promise<MonthlyExpense[]> {
		const startDate = startOfMonth(subMonths(new Date(), 1));
		const endDate = endOfMonth(subMonths(new Date(), 1));
		const forceActive = true;
		const monthlyExpenses = await this.monthlyExpensePersistence.getAndCarryOverMonthlyExpenses({
			startDate,
			endDate,
			forceActive,
		});
		const newMonthlyExpenses = monthlyExpenses.map(expense => {
			const newExpense = expense.toJSON() as IMonthlyExpense;
			newExpense.date = addMonths(expense.document.date, 1);
			newExpense._id = new ObjectId().toHexString();
			return newExpense;
		});
		const savedBatch = await this.saveMonthlyExpenseBatch(newMonthlyExpenses);
		return savedBatch;
	}

	/**
	 * @description
	 * @param userId
	 * @param boundaries
	 */
	public async getMonthlyExpensesByDateReport(
		userId: string,
		boundaries: Date[]
	): Promise<MonthlyExpensesDateReportDTO[]> {
		const report = await this.monthlyExpensePersistence.getMonthlyExpensesByDateReport(userId, boundaries);
		return report;
	}

	/**
	 * @description Gets the user expenses for a date range and specified categories. Also calculates the percentages and sorts them from
	 * largest to smallest
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
		let expenses = await this.monthlyExpensePersistence.getMonthlyExpensesByCategoriesReport(
			userId,
			start,
			end,
			currency
		);
		let total = 0;
		expenses.forEach(expense => {
			total += expense.amount;
		});
		expenses = expenses
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

		return plainToClass(MonthlyExpenseByCategoryReportDTO, expenses);
	}
}
