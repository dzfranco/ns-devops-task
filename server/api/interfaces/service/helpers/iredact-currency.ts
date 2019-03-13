import { RangeFieldInt } from '../../../../common/models/helpers/range-int';
import { DailyTransactionDTO, DailyTransactionPopulatedDTO } from '../../../../common/models/daily-transaction.model';

export interface IRedactService {
	redactDailyTransactions(transactions: DailyTransactionDTO[]): DailyTransactionDTO[];
	redactPopulatedDailyTransactions(transactions: DailyTransactionPopulatedDTO[]): DailyTransactionPopulatedDTO[];
	redactIncomeSource(income: number, currency: string): RangeFieldInt;
}
