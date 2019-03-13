import { subMonths } from 'date-fns';
import { IIncomeSource } from '../../../common/models/income-source';

export const INCOME_SOURCE_MIGRATED_ELEMENT_ID = '5c367141696da9007b46cc13';
export const INCOME_SOURCE_MIGRATED_CATEGORY_ID = '5c367141696da9007b46bb84';
export const INCOME_SOURCE_NOT_MIGRATED_CATEGORY_ID = '5c367141696da9007b46bb85';

export const MIGRATED_INCOME_SOURCE: IIncomeSource = {
	_id: INCOME_SOURCE_MIGRATED_ELEMENT_ID,
	customCategory: INCOME_SOURCE_MIGRATED_CATEGORY_ID,
	name: 'Job',
	amount: 10000,
	currency: 'USD',
	date: subMonths(new Date(), 1),
	timezone: 'America/Los_Angeles',
	user: '5c09800404b167006d57a91e',
	active: true,
	hasCarriedOver: false,
	taxPercentage: 0,
	createdAt: new Date(),
	updatedAt: new Date(),
};

export const NOT_MIGRATED_INCOME_SOURCE: IIncomeSource = {
	_id: '5c367141696da9007b46bb85',
	customCategory: INCOME_SOURCE_NOT_MIGRATED_CATEGORY_ID,
	name: 'Job',
	amount: 10000,
	currency: 'USD',
	date: subMonths(new Date(), 1),
	timezone: 'America/Los_Angeles',
	user: '5c09800404b167006d57a91e',
	active: true,
	hasCarriedOver: true,
	taxPercentage: 0,
	createdAt: new Date(),
	updatedAt: new Date(),
};

export const INCOME_SOURCE_MOCK_LAST_MONTHS_REGISTRIES = [MIGRATED_INCOME_SOURCE, NOT_MIGRATED_INCOME_SOURCE];
