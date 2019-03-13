import { IGenericMonthlyReport } from './IGenericMonthlyReport';
export class DailyTransactionDatesReportDTO implements IGenericMonthlyReport {
	month: number;
	year: number;
	date: Date;
	totalSpent: number;
}
