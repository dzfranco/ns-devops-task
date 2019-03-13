import { ObjectType } from 'type-graphql';
import { BaseByCategoryReport } from './BaseByCategoryReport';
@ObjectType({ implements: BaseByCategoryReport })
export class DailyTransactionByCategoryReportDTO implements BaseByCategoryReport {
	_id: string;
	amount: number;
	percentage?: number;
	name: string;
}
