import { subMonths, startOfMonth, subHours, addHours, endOfMonth } from 'date-fns';
import { convertToTimeZone } from 'date-fns-timezone';
import { IIncomeSource } from '../../../common/models/income-source';

export const LA_TIMEZONE_ID_INCOME_SOURCE = '5c367141696da9007b46cc13';
export const JAPAN_TIMEZONE_ID_INCOME_SOURCE = '5c367141696da9007b46bb85';
export const INCOME_SOURCE_MIGRATED_CATEGORY_ID = '5c367141696da9007b46bb84';
export const INCOME_SOURCE_NOT_MIGRATED_CATEGORY_ID = '5c367141696da9007b46bb85';

const laTimezoneStartOfMonth = subHours(startOfMonth(subMonths(new Date(), 1)), 8);
const japanTimezoneEndOfMonth = addHours(endOfMonth(subMonths(new Date(), 1)), 9);

export const LA_TIMEZONE_MIGRATED_INCOME_SOURCE: IIncomeSource = {
	_id: LA_TIMEZONE_ID_INCOME_SOURCE,
	customCategory: INCOME_SOURCE_MIGRATED_CATEGORY_ID,
	name: 'Nearsoft',
	amount: 10000,
	currency: 'USD',
	date: laTimezoneStartOfMonth,
	timezone: 'America/Los_Angeles',
	user: '5c09800404b167006d57a91e',
	active: true,
	hasCarriedOver: false,
	taxPercentage: 0,
	createdAt: new Date(),
	updatedAt: new Date(),
};

export const JAPAN_TIMEZONE_MIGRATED_INCOME_SOURCE: IIncomeSource = {
	_id: JAPAN_TIMEZONE_ID_INCOME_SOURCE,
	customCategory: INCOME_SOURCE_MIGRATED_CATEGORY_ID,
	name: 'Nearsoft',
	amount: 10000,
	currency: 'USD',
	date: japanTimezoneEndOfMonth,
	timezone: 'Asia/Tokyo',
	user: '5c09800404b167006d57a91e',
	active: true,
	hasCarriedOver: false,
	taxPercentage: 0,
	createdAt: new Date(),
	updatedAt: new Date(),
};

export const INCOME_SOURCE_MOCK_TIMEZONE_LAST_MONTH = [
	LA_TIMEZONE_MIGRATED_INCOME_SOURCE,
	JAPAN_TIMEZONE_MIGRATED_INCOME_SOURCE,
];
