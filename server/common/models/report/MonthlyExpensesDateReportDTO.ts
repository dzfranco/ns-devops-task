import { IGenericMonthlyReport } from './IGenericMonthlyReport';
export class MonthlyExpensesDateReportDTO implements IGenericMonthlyReport {
	month: number;
	year: number;
	date: Date;
	totalSpent: number;
}
