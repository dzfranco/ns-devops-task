import { Activity } from '../../../common/models/activity/activity.model';
import { FriendActivityDTO } from '../../../common/models/activity/friend-activity';
import { Feed } from '../../../common/models/activity/feed';
export interface IActivityService {
	/**
	 * @description Creates an activity
	 * @param {string} userId - The user who creates the activity
	 * @param {string} type - The activity type, shoul match the one in the constants
	 * @param {string} collectionActivity - Id of the object in the linked collection, linked collection will be determined using the type parameter
	 * @param {string} isFeedable - If the activity is feedable or not
	 */
	addActivity(userId: string, type: string, collectionActivity: string, isFeedable: boolean): Promise<Activity>;
	/**
	 * @description Gets the activity feed
	 * @param page
	 * @param limit
	 */
	getFeed(page: number, limit: number): Promise<Feed>;
}
