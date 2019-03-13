import * as _ from 'lodash';

import { ObjectId } from 'mongodb';

import { getDaysInMonth, startOfMonth, endOfMonth, subMonths, addMonths } from 'date-fns';

import { injectable, inject } from 'inversify';

import { IIncomeSourcePersistence } from '../interfaces/persistence/iincome-source.persistence';
import { IIncomeSourceService } from '../interfaces/service/iincome-source';
import { PERSISTENCE_IDENTIFIERS, SERVICE_IDENTIFIER } from '../../common/constants/identifiers';
import { IIncomeSource, IncomeSource } from '../../common/models/income-source';
import { CalculatorUtils } from '../../common/utils/calculators';
import { IncomeSourceFilters } from '../../graphql/types/input/income-source';
import { IncomeSourceDatesReportDTO } from '../../common/models/report/IncomeSourceDatesReportDTO';
import { RangeFieldInt } from '../../common/models/helpers/range-int';
import { IRedactService } from '../interfaces/service/helpers/iredact-currency';
import { ICustomCategoryPersistence } from '../interfaces/persistence/icustom-category.persistence';
import { CURRENCY_US_DOLLAR_ISO } from '../../common/constants/currencies';
import { IDatesHelperService } from '../interfaces/service/helpers/idates-helper';

@injectable()
export class IncomeSourceService implements IIncomeSourceService {
	private redactService: IRedactService;
	private incomeSourcePersistence: IIncomeSourcePersistence;
	private customCategoryPersistence: ICustomCategoryPersistence;

	constructor(
		@inject(PERSISTENCE_IDENTIFIERS.CUSTOM_CATEGORY) customCategoryPersistence: ICustomCategoryPersistence,
		@inject(PERSISTENCE_IDENTIFIERS.INCOME_SOURCE) incomeSourcePersistence: IIncomeSourcePersistence,
		@inject(SERVICE_IDENTIFIER.REDACT) redactSerice: IRedactService
	) {
		this.customCategoryPersistence = customCategoryPersistence;
		this.incomeSourcePersistence = incomeSourcePersistence;
		this.redactService = redactSerice;
	}

	public async disableIncomeSource(userId: string, incomeSourceId: string): Promise<IncomeSource> {
		const foundIncomeSource = await this.incomeSourcePersistence.getIncomeSource(userId, incomeSourceId);
		if (foundIncomeSource === null) {
			throw new Error('Income Source not found');
		}
		const disabledIncomeSource = await this.incomeSourcePersistence.disableIncomeSource(foundIncomeSource);
		return disabledIncomeSource;
	}

	public async editIncomeSources(data: IIncomeSource): Promise<IncomeSource> {
		const foundIncomeSource = await this.incomeSourcePersistence.getIncomeSource(data.user, data._id);
		if (foundIncomeSource === null) {
			throw new Error('Income Source not found');
		}
		const foundCategory = await this.customCategoryPersistence.getUserCategory(
			data.customCategory.toString(),
			data.user.toString()
		);
		if (!foundCategory) {
			throw new Error('Custom Category not found');
		}
		for (const key in data) {
			if (data[key] !== undefined) {
				foundIncomeSource[key] = data[key];
			}
		}
		const editedIncomeSource = await this.incomeSourcePersistence.editIncomeSources(foundIncomeSource);
		return editedIncomeSource;
	}

	public async getUserIncomeSources(userId: string, filters: IncomeSourceFilters): Promise<IncomeSource[]> {
		const incomeSources = await this.incomeSourcePersistence.getUsersIncomeSources(userId, filters);
		return incomeSources;
	}

	/**
	 * @description Gets the income sources sum according to the criteria
	 * @param criteria
	 */
	public async getIncomeSourcesSum(criteria: IncomeSourceFilters): Promise<number> {
		const incomeSourceObjects = await this.getUserIncomeSources(criteria.user, criteria);
		let income = 0;
		incomeSourceObjects.forEach(expense => {
			const amountToAdd = CalculatorUtils.deduceTax(expense.amount, expense.taxPercentage);
			income += amountToAdd;
		});
		return income;
	}

	public async createIncomeSource(data: IIncomeSource): Promise<IncomeSource> {
		const foundCategory = await this.customCategoryPersistence.getUserCategory(
			data.customCategory.toString(),
			data.user.toString()
		);
		if (!foundCategory) {
			throw new Error('Custom Category not found');
		}
		data.hasCarriedOver = false;
		if (!data.taxPercentage) {
			data.taxPercentage = 0;
		}
		if (!data.currency) {
			data.currency = CURRENCY_US_DOLLAR_ISO;
		}

		const createdIncomeSource = await this.incomeSourcePersistence.createIncomeSource(data);
		return createdIncomeSource;
	}

	public async saveIncomeSourcesBatch(incomeSources: IIncomeSource[]): Promise<IncomeSource[]> {
		const savedIncomeSources = await this.incomeSourcePersistence.saveIncomeSourcesBatch(incomeSources);
		return savedIncomeSources;
	}

	/**
	 * @description Removes an income source object given the user Id and income source id if the object belongs to the user
	 * @param userId
	 * @param incomeSourceId
	 */
	public async deleteIncomeSource(userId: string, incomeSourceId: string): Promise<IncomeSource> {
		const foundIncomeSource = await this.incomeSourcePersistence.getIncomeSource(userId, incomeSourceId);
		if (foundIncomeSource === null) {
			throw new Error('Income Source not found');
		}
		const deletedIncomeSource = await this.incomeSourcePersistence.deleteIncomeSource(foundIncomeSource);
		return deletedIncomeSource;
	}

	/**
	 * @description Disables all the income sources belonging to a custom category
	 * @param {string} customCategoryId
	 */
	public async disableCustomCategoryIncomeSources(customCategoryId: string): Promise<IncomeSource[]> {
		const deletedIncomeSources = await this.incomeSourcePersistence.deleteLatestCustomCategoryIncomeSources(
			customCategoryId
		);
		const disabledIncomeSources = await this.incomeSourcePersistence.disableCustomCategoryIncomeSources(
			customCategoryId
		);
		return disabledIncomeSources;
	}

	/**
	 * @description Carries over the active income sources for every user. It also changed the carried over
	 * field so that they won't be carried over more than once
	 */
	public async carryOverIncomeSources(): Promise<IncomeSource[]> {
		try {
			const startDate = startOfMonth(subMonths(new Date(), 1));
			const endDate = endOfMonth(subMonths(new Date(), 1));
			const forceActive = true;
			const incomeSources = await this.incomeSourcePersistence.getAndCarryOverIncomeSources({
				startDate,
				endDate,
				forceActive,
			});
			const newIncomeSources = incomeSources.map(income => {
				const newIncomeSource = income.toJSON() as IIncomeSource;
				newIncomeSource.date = addMonths(income.document.date, 1);
				newIncomeSource._id = new ObjectId().toHexString();
				return newIncomeSource;
			});
			const savedBatch = await this.saveIncomeSourcesBatch(newIncomeSources);
			return savedBatch;
		} catch (error) {
			throw error;
		}
	}

	/**
	 * @description Gets the monthly income for a user. Removes the tax percentage from the total income
	 * @param {string} userId - The user from which the income sources will be calculated
	 * @param {Date} date? - The date to calculate
	 */
	public async getMonthlyIncomeForUser(userId: string, date?: Date): Promise<number> {
		let dateToCalculate;
		date ? (dateToCalculate = date) : (dateToCalculate = new Date());

		const incomeSources = await this.incomeSourcePersistence.getUsersIncomeSources(userId, {
			active: true,
			startDate: startOfMonth(dateToCalculate),
			endDate: endOfMonth(dateToCalculate),
		});
		let totalIncome = 0;
		incomeSources.forEach(incomeSource => {
			const taxedIncome = CalculatorUtils.deduceTax(incomeSource.amount, incomeSource.taxPercentage);
			totalIncome += taxedIncome;
		});
		return totalIncome;
	}

	/**
	 * @description Gets the monthly income for a user given a date range from {startDate, endDate} (including both dates).
	 * Removes the tax percentage from the total income
	 * @param {string} userId - The user from which the income sources will be calculated
	 * @param {Date} startDate - Start Date
	 * @param {Date} endDate - End date
	 */
	public async getMonthlyIncomeForUserDateRange(userId: string, startDate: Date, endDate: Date): Promise<number> {
		const incomeSources = await this.incomeSourcePersistence.getUsersIncomeSources(userId, {
			active: true,
			startDate,
			endDate,
		});
		let totalIncome = 0;
		incomeSources.forEach(incomeSource => {
			const taxedIncome = CalculatorUtils.deduceTax(incomeSource.amount, incomeSource.taxPercentage);
			totalIncome += taxedIncome;
		});
		return totalIncome;
	}

	/**
	 * @description Gets the daily budget for a user. Takes the output from getMonthlyIncome and divides it
	 * into the amount of days
	 * @param {string} userId - The user from which the income sources will be calculated
	 * @param {Date} date - The date for which the  budget be calculated
	 * @param {string} timezone - The timezone
	 */
	public async getDailyBudgetForUser(userId: string, date: Date): Promise<number> {
		const monthlyIncome = await this.getMonthlyIncomeForUser(userId, date);
		const monthDays = getDaysInMonth(date);
		const budget = monthlyIncome / monthDays;
		return Number.parseFloat(budget.toFixed(2));
	}

	/**
	 * @description Gets the income sources for a user given the ranges of the boundaries object
	 * @param {string} userId - The user ID
	 * @param {Date[]} boundaries - Boundaries for the grouping
	 */
	public async getIncomeSourcesByDatesReport(
		userId: string,
		boundaries: Date[]
	): Promise<IncomeSourceDatesReportDTO[]> {
		const reportItems = await this.incomeSourcePersistence.getIncomeSourcesByDatesReport(userId, boundaries);
		return reportItems;
	}

	/**
	 * @description Gets the income sources as a range according to the filters
	 * @param filters
	 */
	public async getRedactedIncomeSources(
		userId: string,
		currency: string,
		startDate: Date,
		endDate: Date
	): Promise<RangeFieldInt> {
		const filters = new IncomeSourceFilters();
		filters.currency = currency;
		filters.startDate = startDate;
		filters.endDate = endDate;
		const incomeSources = await this.getUserIncomeSources(userId, filters);
		let income = 0;
		incomeSources.forEach((incomeSource: IncomeSource) => {
			income += incomeSource.amount;
		});
		const ranges = this.redactService.redactIncomeSource(income, currency);
		return ranges;
	}
}
