import { CronJob } from 'cron';
export interface IMonthlyExpensesCron {
	copyMonthly(): CronJob;
}
