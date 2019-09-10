import { IOccupation } from './ioccupation.model';
import { ObjectId } from 'mongodb';
import { Type, Transform } from 'class-transformer';
import { toObjectID } from 'iridium';
import { ObjectType } from 'type-graphql';

@ObjectType({ implements: IOccupation })
export class OccupationDTO extends IOccupation {
	@Type(() => String)
	@Transform((value: string) => toObjectID(value), { toClassOnly: true })
	public _id: ObjectId;
	protected name: string;
	protected locale: string;
	protected createdAt: Date;
	protected updatedAt: Date;
}
