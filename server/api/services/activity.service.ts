import { injectable, inject } from 'inversify';

import { IActivityPersistance } from '../interfaces/persistence/iactivity.persistence';
import { IActivityService } from '../interfaces/service/iactivity';
import { PERSISTENCE_IDENTIFIERS } from '../../common/constants/identifiers';
import { Activity, IActivity } from '../../common/models/activity/activity.model';
import { FriendActivityDTO } from '../../common/models/activity/friend-activity';
import { Feed } from '../../common/models/activity/feed';
import { TransactionActivityDTO } from '../../common/models/activity/transaction-activity';

@injectable()
export class ActivityService implements IActivityService {
	private activityPersistance: IActivityPersistance;
	constructor(@inject(PERSISTENCE_IDENTIFIERS.ACTIVITY) activityPersistance: IActivityPersistance) {
		this.activityPersistance = activityPersistance;
	}

	/**
	 * @description Creates an activity
	 * @param {string} userId - The user who creates the activity
	 * @param {string} type - The activity type, shoul match the one in the constants
	 * @param {string} collectionActivity - Id of the object in the linked collection, linked collection will be determined using the type parameter
	 * @param {string} isFeedable - If the activity is feedable or not
	 */
	public async addActivity(
		userId: string,
		type: string,
		collectionActivity: string,
		isFeedable: boolean
	): Promise<Activity> {
		const activityData: IActivity = {
			user: userId,
			type,
			collectionId: collectionActivity,
			isFeedable,
			createdAt: null,
			updatedAt: null,
		};
		const createdActivity = await this.activityPersistance.createActivity(activityData);
		return createdActivity;
	}

	/**
	 * @description Gets the activity feed. Encomasses the different kind of activities
	 * @param page
	 * @param limit
	 */
	public async getFeed(page: number, limit: number): Promise<Feed> {
		const activities: Activity[] = await this.activityPersistance.getLatestActivities(page, limit);
		const friendActivities: FriendActivityDTO[] = await this.activityPersistance.getFriendActivities(activities);
		const transactionActivities: TransactionActivityDTO[] = await this.activityPersistance.getTransactionActivities(
			activities
		);
		const feed = new Feed();
		feed.$friendActivities = friendActivities;
		feed.$transactionActivities = transactionActivities;
		return feed;
	}
}
