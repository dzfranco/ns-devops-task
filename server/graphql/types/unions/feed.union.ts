import { createUnionType } from 'type-graphql';
import { FriendActivityDTO } from '../../../common/models/activity/friend-activity';
import { TransactionActivityDTO } from '../../../common/models/activity/transaction-activity';

export const FeedUnion = createUnionType({
	name: 'Feed',
	types: [FriendActivityDTO, TransactionActivityDTO],
});
