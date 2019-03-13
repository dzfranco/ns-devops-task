import { ArgsType, Int, Field } from 'type-graphql';

import { Min, Max } from 'class-validator';

@ArgsType()
export class GetActivityFeedArgs {
	@Field(() => Int)
	@Min(5)
	@Max(50)
	public limit: number;
	@Field(() => Int)
	@Min(1)
	public page: number;
}
