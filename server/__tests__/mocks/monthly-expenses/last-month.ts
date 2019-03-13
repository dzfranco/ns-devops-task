import { IMonthlyExpense } from '../../../common/models/monthly-expense.model';
import { subMonths } from 'date-fns';

export const MIGRATED_ELEMENT_ID = '5c367141696da9007b46cc13';
export const MIGRATED_CATEGORY_ID = '5c367141696da9007b46bb84';
export const NOT_MIGRATED_CATEGORY_ID = '5c367141696da9007b46bb85';

export const MIGRATED_REGISTRY: IMonthlyExpense = {
	_id: MIGRATED_ELEMENT_ID,
	customCategory: MIGRATED_CATEGORY_ID,
	name: 'Nearsoft',
	amount: 10000,
	currency: 'USD',
	date: subMonths(new Date(), 1),
	timezone: 'America/Los_Angeles',
	user: '5c09800404b167006d57a91e',
	active: true,
	hasCarriedOver: false,
	createdAt: new Date(),
	updatedAt: new Date(),
};

export const NOT_MIGRATED_REGISTRY: IMonthlyExpense = {
	_id: '5c367141696da9007b46bb85',
	customCategory: NOT_MIGRATED_CATEGORY_ID,
	name: 'Nearsoft',
	amount: 10000,
	currency: 'USD',
	date: subMonths(new Date(), 1),
	timezone: 'America/Los_Angeles',
	user: '5c09800404b167006d57a91e',
	active: true,
	hasCarriedOver: true,
	createdAt: new Date(),
	updatedAt: new Date(),
};

export const MONTHLY_EXPENSE_MOCK_LAST_MONTHS_REGISTRIES = [MIGRATED_REGISTRY, NOT_MIGRATED_REGISTRY];
