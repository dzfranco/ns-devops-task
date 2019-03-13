import { injectable, inject } from 'inversify';

import { User } from '../../common/models/user/user.model';
import { IFriendPersistence } from '../interfaces/persistence/ifriend.persistence';
import { IActivityService } from '../interfaces/service/iactivity';
import { IFriendService } from '../interfaces/service/ifriend';
import { ACTIVITIES } from '../../common/constants/activities';
import { PERSISTENCE_IDENTIFIERS, SERVICE_IDENTIFIER } from '../../common/constants/identifiers';
import { Friend } from '../../common/models/friend.model';
import { IUserService } from '../interfaces';
import { RedactedUserDTO } from '../../common/models/user/redacted-user';

@injectable()
export class FriendService implements IFriendService {
	private friendPersistence: IFriendPersistence;
	private userService: IUserService;
	private activityService: IActivityService;

	constructor(
		@inject(PERSISTENCE_IDENTIFIERS.FRIEND) friendPersistence: IFriendPersistence,
		@inject(SERVICE_IDENTIFIER.ACTIVITY) activityService: IActivityService,
		@inject(SERVICE_IDENTIFIER.USER) userService: IUserService
	) {
		this.friendPersistence = friendPersistence;
		this.activityService = activityService;
		this.userService = userService;
	}

	/**
	 * @description Friends one user to another one, returns an object if the friendship relationship exists.
	 * The relationship is not commutative
	 * @param userId - The user who will friend
	 * @param friendId - The user who will be friended
	 */
	public async addFriend(userId: string, friendId: string): Promise<Friend> {
		const foundFriend = await this.friendPersistence.getFriend(userId, friendId);
		if (foundFriend !== null) {
			foundFriend.isActive = true;
			const editedFriendIfFound = this.friendPersistence.saveFriend(foundFriend);
			return editedFriendIfFound;
		}
		const savedFriend = await this.friendPersistence.createFriend(userId, friendId);
		await this.activityService.addActivity(userId, ACTIVITIES.FOLLOW, savedFriend._id, true);
		return savedFriend;
	}

	/**
	 * @description Removes a friend
	 * @param userId - The user to whom the friend belongs
	 * @param friendId - The friend
	 */
	public async unFriend(userId: string, friendId: string): Promise<Friend> {
		const foundFriend = await this.friendPersistence.getFriend(userId, friendId);
		if (foundFriend === null) {
			throw new Error('Friend not found');
		}
		const removedFriend = await this.friendPersistence.unFriend(foundFriend);
		return removedFriend;
	}

	/**
	 * @description Gets a paginated list of user friends
	 * @param {string} userId - User to query
	 * @param {string} searchTerm - Search that will begin to lookup from the beginning of the word
	 * @param {number} page - Page to search
	 * @param {number} limit - Amount of results per page
	 */
	public async getUserFriends(userId: string, searchTerm: string, page: number, limit: number): Promise<User[]> {
		const friendList = await this.friendPersistence.getUserFriends(userId, searchTerm, page, limit);
		return friendList;
	}

	/**
	 * @description Gets a single friend's info and redacts it
	 * @param userId
	 * @param friendId
	 */
	public async getSingleFriend(userId: string, friendId: string): Promise<RedactedUserDTO> {
		const friendship = await this.friendPersistence.getFriend(userId, friendId);
		if (friendship === null) {
			throw new Error('Friend not found');
		}
		const user = await this.userService.getUserById(friendship.friend);
		return user.toRedatedUserDTO();
	}
}
