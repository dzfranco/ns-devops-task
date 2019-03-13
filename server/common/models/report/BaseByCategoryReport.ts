import { Field, Float, InterfaceType, ID } from 'type-graphql';
@InterfaceType()
export abstract class BaseByCategoryReport {
	@Field(type => ID)
	public _id: string;
	@Field(type => Float)
	public amount: number;
	@Field(type => Float)
	public percentage?: number;
	@Field(type => String)
	public name: string;
}
