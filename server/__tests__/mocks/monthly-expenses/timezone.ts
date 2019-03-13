import { IMonthlyExpense } from '../../../common/models/monthly-expense.model';
import { subMonths, startOfMonth, subHours, addHours, endOfMonth } from 'date-fns';
import { convertToTimeZone } from 'date-fns-timezone';

export const LA_TIMEZONE_ID = '5c367141696da9007b46cc13';
export const JAPAN_TIMEZONE_ID = '5c367141696da9007b46bb85';
export const MIGRATED_CATEGORY_ID = '5c367141696da9007b46bb84';
export const NOT_MIGRATED_CATEGORY_ID = '5c367141696da9007b46bb85';

const laTimezoneStartOfMonth = subHours(startOfMonth(subMonths(new Date(), 1)), 8);
const japanTimezoneEndOfMonth = addHours(endOfMonth(subMonths(new Date(), 1)), 9);

export const LA_TIMEZONE_MIGRATED_REGISTRY: IMonthlyExpense = {
	_id: LA_TIMEZONE_ID,
	customCategory: MIGRATED_CATEGORY_ID,
	name: 'Nearsoft',
	amount: 10000,
	currency: 'USD',
	date: laTimezoneStartOfMonth,
	timezone: 'America/Los_Angeles',
	user: '5c09800404b167006d57a91e',
	active: true,
	hasCarriedOver: false,
	createdAt: new Date(),
	updatedAt: new Date(),
};

export const JAPAN_TIMEZONE_MIGRATED_REGISTRY: IMonthlyExpense = {
	_id: JAPAN_TIMEZONE_ID,
	customCategory: MIGRATED_CATEGORY_ID,
	name: 'Nearsoft',
	amount: 10000,
	currency: 'USD',
	date: japanTimezoneEndOfMonth,
	timezone: 'Asia/Tokyo',
	user: '5c09800404b167006d57a91e',
	active: true,
	hasCarriedOver: false,
	createdAt: new Date(),
	updatedAt: new Date(),
};

export const MONTHLY_EXPENSE_MOCK_TIMEZONE_LAST_MONTH = [
	LA_TIMEZONE_MIGRATED_REGISTRY,
	JAPAN_TIMEZONE_MIGRATED_REGISTRY,
];
