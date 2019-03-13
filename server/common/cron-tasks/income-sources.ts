import { CronJob } from 'cron';

import { injectable, inject } from 'inversify';

import { SERVICE_IDENTIFIER } from '../constants/identifiers';
import { IIncomeSourcesCron } from '../../api/interfaces/cron-task/iincomesource-cron';
import { IIncomeSourceService } from '../../api/interfaces/service/iincome-source';

@injectable()
export class IncomeSourcesCron implements IIncomeSourcesCron {
	private incomeSourceService: IIncomeSourceService;
	constructor(@inject(SERVICE_IDENTIFIER.INCOME_SOURCE) incomeSourceService: IIncomeSourceService) {
		this.incomeSourceService = incomeSourceService;
	}
	/**
	 * @description Runs a job every first day of the month that copies all the active monthly expenses to the next month
	 */
	public copyMonthly(): CronJob {
		const cronJob = new CronJob('0 0 0 1 * *', async () => {
			await this.incomeSourceService.carryOverIncomeSources();
		});
		return cronJob;
	}
}
