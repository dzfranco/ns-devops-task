import { DailyTransactionByCategoryReportDTO } from '../../../common/models/report/DailyTransactionByCategoryReportDTO';
import { MonthlyExpenseByCategoryReportDTO } from '../../../common/models/report/MonthlyExpenseByCategoryReportDTO';
import { MonthlyPSIReportDTO } from '../../../common/models/report/MonthlyPSIReportDTO';
import { OverviewReportDTO } from '../../../common/models/report/OverviewReportDTO';

export interface IReportsService {
	getMonthlyPSI(userId: string, year: number): Promise<MonthlyPSIReportDTO[]>;
	getOverviewChart(userId: string, month: number, year: number): Promise<OverviewReportDTO>;
	/**
	 * @description Returns the total expenses by date period. In includes monthly expenses and daily transactions
	 * @param  {string} userId
	 * @param  {Date} start
	 * @param  {Date} end
	 * @return Promise<MonthlyExpenseByCategoryReportDTO[]>
	 * @memberof ReportsService
	 */
	getTotalExpensesByDateChart(userId: string, start: Date, end: Date): Promise<MonthlyExpenseByCategoryReportDTO[]>;

	getMonthlyExpensesByCategoryChart(
		userId: string,
		start: Date,
		end: Date,
		currency?: string
	): Promise<MonthlyExpenseByCategoryReportDTO[]>;

	/**
	 * @description Gets a user's monthly expenses amounts grouped by category given a date range and an optional currency
	 * @param {string} userId - The user for which the report will be generated
	 * @param {date} start
	 * @param {date} end
	 * @param {string} currency? - Optional currency, if not specified will default to USD
	 * @returns {DailyTransactionByCategoryReportDTO[]}
	 */
	getDailyTransactionsByCategoryChart(
		userId: string,
		start: Date,
		end: Date,
		currency?: string
	): Promise<DailyTransactionByCategoryReportDTO[]>;
}
