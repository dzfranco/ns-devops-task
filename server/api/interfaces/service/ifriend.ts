import { Friend } from '../../../common/models/friend.model';
import { User } from '../../../common/models/user/user.model';
import { RedactedUserDTO } from '../../../common/models/user/redacted-user';

export interface IFriendService {
	/**
	 * @description Friends one user to another one, returns an object if the friendship relationship exists.
	 * The relationship is not commutative
	 * @param userId - The user who will friend
	 * @param friendId - The user who will be friended
	 */
	addFriend(userId: string, friendId: string): Promise<Friend>;
	/**
	 * @description Removes a friend
	 * @param userId - The user to whom the friend belongs
	 * @param friendId - The friend
	 */
	unFriend(userId: string, friendId: string): Promise<Friend>;
	/**
	 * @description Gets a paginated list of user friends
	 * @param {string} userId - User to query
	 * @param {string} searchTerm - Search that will begin to lookup from the beginning of the word
	 * @param {number} page - Page to search
	 * @param {number} limit - Amount of results per page
	 */
	getUserFriends(userId: string, searchTerm: string, page: number, limit: number): Promise<User[]>;

	/**
	 * @description Gets a single friend's info and redacts it
	 * @param userId - The user to whom the friend belongs
	 * @param friendId - The friend
	 * @returns {RedactedUserDTO} - User with redacted info
	 */
	getSingleFriend(userId: string, friendId: string): Promise<RedactedUserDTO>;
}
