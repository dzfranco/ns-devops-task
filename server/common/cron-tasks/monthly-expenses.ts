import { CronJob } from 'cron';
import { injectable, inject } from 'inversify';
import { IMonthlyExpenseService } from '../../api/interfaces/service/imonthly-expense';
import { SERVICE_IDENTIFIER } from '../constants/identifiers';
import { IMonthlyExpensesCron } from '../../api/interfaces/cron-task/imonthlyexpense-cron';

@injectable()
export class MonthlyExpensesCron implements IMonthlyExpensesCron {
	private monthlyExpenseService: IMonthlyExpenseService;
	constructor(@inject(SERVICE_IDENTIFIER.MONTHLY_EXPENSE) monthlyExpenseService: IMonthlyExpenseService) {
		this.monthlyExpenseService = monthlyExpenseService;
	}
	/**
	 * @description Runs a job every first day of the month that copies all the active monthly expenses to the next month
	 */
	public copyMonthly(): CronJob {
		const cronJob = new CronJob('0 0 0 1 * *', async () => {
			await this.monthlyExpenseService.carryOverMonthlyExpenses();
		});
		return cronJob;
	}
}
