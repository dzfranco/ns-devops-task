import { injectable } from 'inversify';
import { IRedactService } from '../../interfaces/service/helpers/iredact-currency';
import { RangeFieldInt } from '../../../common/models/helpers/range-int';
import { CURRENCY_US_DOLLAR_ISO, CURRENCY_MX_PESO_ISO } from '../../../common/constants/currencies';
import { DailyTransactionDTO, DailyTransactionPopulatedDTO } from '../../../common/models/daily-transaction.model';

@injectable()
export class RedactService implements IRedactService {
	/**
	 * @description Redacts a daily transaction, setting the payee to null
	 * @param transactions
	 */
	public redactDailyTransactions(transactions: DailyTransactionDTO[]): DailyTransactionDTO[] {
		return transactions.map(transaction => {
			transaction.payee = null;
			return transaction;
		});
	}
	/**
	 * @description Redacts a daily transaction, setting the payee to null
	 * @param transactions
	 */
	public redactPopulatedDailyTransactions(
		transactions: DailyTransactionPopulatedDTO[]
	): DailyTransactionPopulatedDTO[] {
		return transactions.map(transaction => {
			transaction.payee = null;
			return transaction;
		});
	}

	public redactIncomeSource(income: number, currency: string): RangeFieldInt {
		switch (currency) {
			case CURRENCY_US_DOLLAR_ISO:
				return this.redactIncomeUSD(income);
			case CURRENCY_MX_PESO_ISO:
				return this.redactIncomeMXN(income);
			default:
				return this.redactIncomeUSD(income);
		}
	}
	/**
	 * @description Redacts the income using mexican peso ranges
	 * @param income
	 */
	private redactIncomeMXN(income: number): RangeFieldInt {
		const range = new RangeFieldInt();
		if (income < 25000) {
			range.$min = 0;
			range.$max = 24999;
		}
		if (income > 25000 && income < 50000) {
			range.$min = 25000;
			range.$max = 49999;
		}
		if (income > 50000 && income < 75000) {
			range.$min = 50000;
			range.$max = 74999;
		}
		if (income > 75000 && income < 100000) {
			range.$min = 75000;
			range.$max = 99999;
		}
		if (income > 100000 && income < 125000) {
			range.$min = 100000;
			range.$max = 124999;
		}
		if (income > 125000 && income < 150000) {
			range.$min = 125000;
			range.$max = 149999;
		}
		if (income > 150000 && income < 175000) {
			range.$min = 150000;
			range.$max = 174999;
		}
		if (income > 175000 && income < 200000) {
			range.$min = 175000;
			range.$max = 199999;
		}
		if (income > 200000 && income < 250000) {
			range.$min = 200000;
			range.$max = 249999;
		}
		if (income > 250000 && income < 300000) {
			range.$min = 250000;
			range.$max = 299999;
		}
		if (income > 300000 && income < 350000) {
			range.$min = 300000;
			range.$max = 349000;
		}
		if (income > 350000 && income < 400000) {
			range.$min = 350000;
			range.$max = 399999;
		}
		if (income > 400000 && income < 450000) {
			range.$min = 400000;
			range.$max = 449999;
		}
		if (income > 450000 && income < 500000) {
			range.$min = 450000;
			range.$max = 499999;
		}
		if (income >= 500000) {
			range.$min = 500000;
			range.$max = 0;
		}
		return range;
	}
	/**
	 * @description Redacts the income using US Dollar ranges
	 * @param income
	 */
	private redactIncomeUSD(income: number): RangeFieldInt {
		const range = new RangeFieldInt();
		if (income < 25000) {
			range.$min = 0;
			range.$max = 24999;
		}
		if (income > 25000 && income < 50000) {
			range.$min = 25000;
			range.$max = 49999;
		}
		if (income > 50000 && income < 75000) {
			range.$min = 50000;
			range.$max = 74999;
		}
		if (income > 75000 && income < 100000) {
			range.$min = 75000;
			range.$max = 99999;
		}
		if (income > 100000 && income < 125000) {
			range.$min = 100000;
			range.$max = 124999;
		}
		if (income > 125000 && income < 150000) {
			range.$min = 125000;
			range.$max = 149999;
		}
		if (income > 150000 && income < 175000) {
			range.$min = 150000;
			range.$max = 174999;
		}
		if (income > 175000 && income < 200000) {
			range.$min = 175000;
			range.$max = 199999;
		}
		if (income > 200000 && income < 250000) {
			range.$min = 200000;
			range.$max = 249999;
		}
		if (income > 250000 && income < 300000) {
			range.$min = 250000;
			range.$max = 299999;
		}
		if (income > 300000 && income < 350000) {
			range.$min = 300000;
			range.$max = 349000;
		}
		if (income > 350000 && income < 400000) {
			range.$min = 350000;
			range.$max = 399999;
		}
		if (income > 400000 && income < 450000) {
			range.$min = 400000;
			range.$max = 449999;
		}
		if (income > 450000 && income < 500000) {
			range.$min = 450000;
			range.$max = 499999;
		}
		if (income >= 500000) {
			range.$min = 500000;
			range.$max = 0;
		}
		return range;
	}
}
