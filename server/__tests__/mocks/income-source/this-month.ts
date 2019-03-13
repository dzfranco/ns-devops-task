import { IIncomeSource } from '../../../common/models/income-source';
import { addMonths, subMonths } from 'date-fns';

const pastRegistryTwoMonths: IIncomeSource = {
	_id: '5c367141696da9007b46bb84',
	customCategory: '5c09800404b167006d57a91e',
	name: 'Nearsoft',
	amount: 10000,
	currency: 'USD',
	date: subMonths(new Date(), 2),
	timezone: 'America/Los_Angeles',
	user: '5c09800404b167006d57a91e',
	active: true,
	hasCarriedOver: false,
	taxPercentage: 0,
	createdAt: new Date(),
	updatedAt: new Date(),
};
const currentRegistry: IIncomeSource = {
	_id: '5c367141696da9007b46bb85',
	customCategory: '5c09800404b167006d57a91e',
	name: 'Something else',
	amount: 32506,
	currency: 'USD',
	date: new Date(),
	timezone: 'America/Los_Angeles',
	user: '5c09800404b167006d57a91e',
	active: true,
	hasCarriedOver: false,
	taxPercentage: 0,
	createdAt: new Date(),
	updatedAt: new Date(),
};
const futureRegistry: IIncomeSource = {
	_id: '5c367141696da9007b46bb86',
	customCategory: '5c09800404b167006d57a91e',
	name: 'Something else',
	amount: 32506,
	currency: 'USD',
	date: addMonths(new Date(), 1),
	timezone: 'America/Los_Angeles',
	user: '5c09800404b167006d57a91e',
	active: true,
	hasCarriedOver: false,
	taxPercentage: 0,
	createdAt: new Date(),
	updatedAt: new Date(),
};

export const INCOME_SOURCE_MOCK_THIS_MONTHS_REGISTRIES = [pastRegistryTwoMonths, currentRegistry, futureRegistry];
