import { Friend } from '../../../common/models/friend.model';
import { User } from '../../../common/models/user/user.model';

export interface IFriendPersistence {
	/**
	 * @description Gets a paginated list of user friends
	 * @param {string} userId - User to query
	 * @param {string} searchTerm - Search that will begin to lookup from the beginning of the word
	 * @param {number} page - Page to search
	 * @param {number} limit - Amount of results per page
	 */
	getUserFriends(userId: string, searchTerm: string, page: number, limit: number): Promise<User[]>;
	unFriend(friend: Friend): Promise<Friend>;
	createFriend(userId: string, friendId: string): Promise<Friend>;
	saveFriend(friend: Friend): Promise<Friend>;
	getFriend(userId: string, friendId: string): Promise<Friend>;
}
