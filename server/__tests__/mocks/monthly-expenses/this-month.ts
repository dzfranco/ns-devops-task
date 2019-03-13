import { IMonthlyExpense } from '../../../common/models/monthly-expense.model';

const firstRegistry: IMonthlyExpense = {
	_id: '5c367141696da9007b46bb84',
	customCategory: '5c09800404b167006d57a91e',
	name: 'Nearsoft',
	amount: 10000,
	currency: 'USD',
	date: new Date(),
	timezone: 'America/Los_Angeles',
	user: '5c09800404b167006d57a91e',
	active: true,
	hasCarriedOver: false,
	createdAt: new Date(),
	updatedAt: new Date(),
};
const secondRegistry: IMonthlyExpense = {
	_id: '5c367141696da9007b46bb85',
	customCategory: '5c09800404b167006d57a91e',
	name: 'Something else',
	amount: 32506,
	currency: 'USD',
	date: new Date(),
	timezone: 'America/Los_Angeles',
	user: '5c09800404b167006d57a91e',
	active: true,
	hasCarriedOver: true,
	createdAt: new Date(),
	updatedAt: new Date(),
};

export const MONTHLY_EXPENSE_MOCK_THIS_MONTHS_REGISTRIES = [firstRegistry, secondRegistry];
