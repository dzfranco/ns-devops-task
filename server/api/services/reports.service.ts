import * as _ from 'lodash';

import { startOfYear, addMonths, startOfMonth, endOfMonth, setYear, setMonth } from 'date-fns';

import { injectable, inject } from 'inversify';

import { IDailyTransactionService } from '../interfaces/service/idaily-transaction';
import { IMonthlyExpenseService } from '../interfaces/service/imonthly-expense';
import { IReportsService } from '../interfaces/service/ireports';
import { SERVICE_IDENTIFIER } from '../../common/constants/identifiers';
import { MonthlyExpense } from '../../common/models/monthly-expense.model';
import { DailyTransactionByCategoryReportDTO } from '../../common/models/report/DailyTransactionByCategoryReportDTO';
import { MonthlyExpensesDateReportDTO } from '../../common/models/report/MonthlyExpensesDateReportDTO';
import { DailyTransactionDatesReportDTO } from '../../common/models/report/DailyTransactionDatesReportDTO';
import { MonthlyPSIReportDTO } from '../../common/models/report/MonthlyPSIReportDTO';
import { OverviewReportDTO } from '../../common/models/report/OverviewReportDTO';
import { IncomeSourceDatesReportDTO } from '../../common/models/report/IncomeSourceDatesReportDTO';
import { IIncomeSourceService } from '../interfaces/service/iincome-source';
import { MonthlyExpenseByCategoryReportDTO } from '../../common/models/report/MonthlyExpenseByCategoryReportDTO';
import { ICustomCategoryService } from '../interfaces/service/icustom-category';
import { CustomCategoryDTO } from '../../common/models/categories/custom-category';

@injectable()
export class ReportsService implements IReportsService {
	private monthlyExpenseService: IMonthlyExpenseService;
	private dailyTransactionService: IDailyTransactionService;
	private incomeSourceService: IIncomeSourceService;
	private customCategoryService: ICustomCategoryService;

	constructor(
		@inject(SERVICE_IDENTIFIER.MONTHLY_EXPENSE) monthlyExpenseService: IMonthlyExpenseService,
		@inject(SERVICE_IDENTIFIER.DAILY_TRANSACTION) dailyTransactionService: IDailyTransactionService,
		@inject(SERVICE_IDENTIFIER.INCOME_SOURCE) incomeSourceService: IIncomeSourceService,
		@inject(SERVICE_IDENTIFIER.CUSTOM_CATEGORY) customCategoryService: ICustomCategoryService
	) {
		this.monthlyExpenseService = monthlyExpenseService;
		this.dailyTransactionService = dailyTransactionService;
		this.incomeSourceService = incomeSourceService;
		this.customCategoryService = customCategoryService;
	}

	/**
	 * @description Returns the total expenses by date period. In includes monthly expenses and daily transactions
	 * @param  {string} userId
	 * @param  {Date} start
	 * @param  {Date} end
	 * @return Promise<MonthlyExpenseByCategoryReportDTO[]>
	 * @memberof ReportsService
	 */
	public async getTotalExpensesByDateChart(
		userId: string,
		start: Date,
		end: Date
	): Promise<MonthlyExpenseByCategoryReportDTO[]> {
		const reportItems: MonthlyExpenseByCategoryReportDTO[] = [];
		const categories: CustomCategoryDTO[] = await this.customCategoryService.getTotalSpenditureByDateCategories(
			userId,
			start,
			end
		);
		let total = 0;
		categories.forEach(category => {
			if (category.total) {
				total += category.total;
			}
		});
		categories.forEach(category => {
			const item = new MonthlyExpenseByCategoryReportDTO();
			item._id = category._id.toString();
			item.amount = category.total;
			item.percentage = (category.total / total) * 100;
			item.name = category.name;
			reportItems.push(item);
		});
		return reportItems;
	}

	/**
	 * @description Gets a user's monthly expenses amounts grouped by category given a date range and an optional currency
	 * @param {string} userId - The user for which the report will be generated
	 * @param {date} start
	 * @param {date} end
	 * @param {string} currency? - Optional currency, if not specified will default to USD
	 * @returns {DailyTransactionByCategoryReportDTO[]}
	 */
	public async getDailyTransactionsByCategoryChart(
		userId: string,
		start: Date,
		end: Date,
		currency?: string
	): Promise<DailyTransactionByCategoryReportDTO[]> {
		const reports = await this.dailyTransactionService.getDailyTransactionsByCategoriesReport(
			userId,
			start,
			end,
			currency
		);
		return reports;
	}
	/**
	 * @description Gets a user's monthly expenses amounts grouped by category given a date range and an optional currency
	 * @param {string} userId - The user for which the report will be generated
	 * @param {date} start
	 * @param {date} end
	 * @param {string} currency? - Optional currency, if not specified will default to USD
	 * @returns {MonthlyExpenseByCategoryReportDTO[]}
	 */
	public async getMonthlyExpensesByCategoryChart(
		userId: string,
		start: Date,
		end: Date,
		currency?: string
	): Promise<MonthlyExpenseByCategoryReportDTO[]> {
		const reports = await this.monthlyExpenseService.getMonthlyExpensesByCategoriesReport(
			userId,
			start,
			end,
			currency
		);
		return reports;
	}
	/**
	 * @description Gets the overview report comparing monthly expenses, daily transactions and income for a given
	 * month and year
	 * @param {string} userId - The user for which the report will be generated
	 * @param {number} month - Month from which the report will be calculated, used in tandem with year to get a date
	 * @param {number} year  - Year from which the report will be calculated
	 * @returns {Promise<OverviewReportDTO>}
	 */
	public async getOverviewChart(userId: string, month: number, year: number): Promise<OverviewReportDTO> {
		month = month - 1;
		const date = setYear(setMonth(new Date(), month), year);
		const start = startOfMonth(date);
		const end = endOfMonth(date);
		const monthlyExpensesSum: number = await this.monthlyExpenseService.getMonthlyExpensesSum({
			startDate: start,
			endDate: end,
			user: userId,
			forceActive: true,
		});
		const dailyTransactionsSum: number = await this.dailyTransactionService.getDailyTransactionsSum({
			startDate: start,
			endDate: end,
			user: userId,
		});
		const incomeSum: number = await this.incomeSourceService.getMonthlyIncomeForUserDateRange(userId, start, end);
		const report = new OverviewReportDTO();
		if (incomeSum === 0) {
			report.daily = 0;
			report.monthly = 0;
			report.savingsOrDeficit = 0;
			return report;
		}
		report.monthly = monthlyExpensesSum;
		report.daily = dailyTransactionsSum;
		report.income = incomeSum;
		report.savingsOrDeficit = incomeSum - report.monthly - report.daily;
		return report;
	}

	/**
	 * @description Builds the monthly PSI report according to the year
	 * @param {string} userId - The User to get the report from
	 * @param {number} year - Year to calculate monthly reports
	 * @returns {Promise<MonthlyPSIReportDTO[]>}
	 */

	public async getMonthlyPSI(userId: string, year: number): Promise<MonthlyPSIReportDTO[]> {
		const beginning = startOfYear(setYear(new Date(), year));
		const dateBoundaries: Date[] = [];
		for (let toAdd = 0; toAdd < 12; toAdd++) {
			const newDate = addMonths(beginning, toAdd);
			dateBoundaries.push(newDate);
		}
		const transactionReports: DailyTransactionDatesReportDTO[] = await this.dailyTransactionService.getTransactionsByDatesReport(
			userId,
			dateBoundaries
		);
		const monthlyReports: MonthlyExpensesDateReportDTO[] = await this.monthlyExpenseService.getMonthlyExpensesByDateReport(
			userId,
			dateBoundaries
		);
		const incomeSourceReports: IncomeSourceDatesReportDTO[] = await this.incomeSourceService.getIncomeSourcesByDatesReport(
			userId,
			dateBoundaries
		);

		const finalReports: MonthlyPSIReportDTO[] = [];
		_.zipWith(
			transactionReports,
			monthlyReports,
			incomeSourceReports,
			(
				transactionReport: DailyTransactionDatesReportDTO,
				monthlyReport: MonthlyExpensesDateReportDTO,
				incomeReport: IncomeSourceDatesReportDTO
			) => {
				const psiReport = new MonthlyPSIReportDTO();
				psiReport.date = transactionReport.date;
				psiReport.month = transactionReport.month;
				psiReport.year = transactionReport.year;
				psiReport.totalSpent = transactionReport.totalSpent + monthlyReport.totalSpent;
				psiReport.daily = transactionReport.totalSpent;
				psiReport.monthly = monthlyReport.totalSpent;
				psiReport.grossIncome = incomeReport.grossIncome;
				psiReport.taxes = incomeReport.taxes;
				psiReport.adjustedIncome = incomeReport.adjustedIncome;
				if (psiReport.adjustedIncome <= 0) {
					psiReport.psi = 0;
				} else {
					psiReport.psi = (100 * psiReport.totalSpent) / psiReport.adjustedIncome;
				}
				finalReports.push(psiReport);
			}
		);

		return finalReports;
	}
}
