import { FriendActivityDTO } from './friend-activity';
import { TransactionActivityDTO } from './transaction-activity';

export class Feed {
	/**
	 * Getter $friendActivities
	 * @return {FriendActivityDTO[]}
	 */
	public get $friendActivities(): FriendActivityDTO[] {
		return this.friendActivities;
	}

	/**
	 * Setter $friendActivities
	 * @param {FriendActivityDTO[]} value
	 */
	public set $friendActivities(value: FriendActivityDTO[]) {
		this.friendActivities = value;
	}

	/**
	 * Getter $transactionActivities
	 * @return {TransactionActivityDTO[]}
	 */
	public get $transactionActivities(): TransactionActivityDTO[] {
		return this.transactionActivities;
	}

	/**
	 * Setter $transactionActivities
	 * @param {TransactionActivityDTO[]} value
	 */
	public set $transactionActivities(value: TransactionActivityDTO[]) {
		this.transactionActivities = value;
	}

	private friendActivities: FriendActivityDTO[];
	private transactionActivities: TransactionActivityDTO[];
}
