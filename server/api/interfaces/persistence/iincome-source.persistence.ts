import { IncomeSource, IIncomeSource } from '../../../common/models/income-source';
import { IncomeSourceFilters } from '../../../graphql/types/input/income-source';
import { IncomeSourceDatesReportDTO } from '../../../common/models/report/IncomeSourceDatesReportDTO';

export interface IIncomeSourcePersistence {
	editIncomeSources(data: IncomeSource): Promise<IncomeSource>;
	disableIncomeSource(data: IncomeSource): Promise<IncomeSource>;
	createIncomeSource(data: IIncomeSource): Promise<IncomeSource>;
	getIncomeSource(userId: string, incomeSourceId: string): Promise<IncomeSource>;
	getUsersIncomeSources(userId: string, filters?: IncomeSourceFilters): Promise<IncomeSource[]>;

	getAndCarryOverIncomeSources(criteria: IncomeSourceFilters): Promise<IncomeSource[]>;
	saveIncomeSourcesBatch(incomeSources: IIncomeSource[]): Promise<IncomeSource[]>;

	/**
	 * @description Disables all the income sources belonging to a certain custom category
	 * @param customCategoryId
	 */
	disableCustomCategoryIncomeSources(customCategoryId: string): Promise<IncomeSource[]>;

	/**
	 * @description Removes the income sources corresponding to the current month given a category id
	 * @param customCategoryId
	 */
	deleteLatestCustomCategoryIncomeSources(customCategoryId: string): Promise<number>;

	/**
	 * @description Deletes an income source object
	 * @param {IncomeSource} incomeSource - The income source object to delete
	 */
	deleteIncomeSource(incomeSource: IncomeSource): Promise<IncomeSource>;

	/**
	 * @description Gets a user's income sources report separated by the boundaries given in the dates array
	 * @param {string} userId - The user id
	 * @param {Date[]} dates - Dates serving as boundaries as described in https://docs.mongodb.com/manual/reference/operator/aggregation/bucket/
	 * for boundaries field
	 * @returns {Promise<IncomeSourceDatesReportDTO[]>} The reports separated by date
	 */
	getIncomeSourcesByDatesReport(userId: string, dates: Date[]): Promise<IncomeSourceDatesReportDTO[]>;
}
