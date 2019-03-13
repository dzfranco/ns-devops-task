import { Activity, IActivity } from '../../../common/models/activity/activity.model';
import { FriendActivityDTO } from '../../../common/models/activity/friend-activity';
import { TransactionActivityDTO } from '../../../common/models/activity/transaction-activity';

export interface IActivityPersistance {
	/**
	 * @description Creates a new Activity given the data
	 * @param {IActivity} activityData
	 */
	createActivity(activityData: IActivity): Promise<Activity>;
	/**
	 * @description Saves an activity object
	 * @param {Activity} activity - The activity to save
	 */
	saveActivity(activity: Activity): Promise<Activity>;
	/**
	 * @description Gets the latest activities sorted by recency
	 * @param {number} page - The page to look up
	 * @param {number} limit - Amount of results per page
	 */
	getLatestActivities(page: number, limit: number): Promise<Activity[]>;

	/**
	 * @description Gets the friend activities subset from a set of activites
	 * @param {Activity[]} actvities - The actvities to check
	 */
	getFriendActivities(activities: Activity[]): Promise<FriendActivityDTO[]>;

	/**
	 * @description Gets transaction activities subset from a set of activities
	 * @param activities
	 */
	getTransactionActivities(activities: Activity[]): Promise<TransactionActivityDTO[]>;
}
