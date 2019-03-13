import { InputType, Field, Int } from 'type-graphql';
import { IsIn, Matches } from 'class-validator';
import { Friend } from '../../../common/models/friend.model';
import { VALIDATION_CONSTANTS } from '../../../common/constants/validation';

@InputType({ description: 'Create a friend Input' })
export class CreateFriendInput implements Partial<Friend> {
	@Matches(VALIDATION_CONSTANTS.OBJECT_ID, { message: '_id should be a valid ObjectId' })
	@Field(type => String)
	public friendId: string;
}
