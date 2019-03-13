import { CronJob } from 'cron';
export interface IIncomeSourcesCron {
	copyMonthly(): CronJob;
}
