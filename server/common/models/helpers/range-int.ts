import { ObjectType, Field, Int, InputType, InterfaceType } from 'type-graphql';

@InterfaceType()
export abstract class IRangeFieldInt {
	@Field(type => Int)
	protected min: number;
	@Field(type => Int)
	protected max: number;
}

@ObjectType({ implements: IRangeFieldInt })
export class RangeFieldInt extends IRangeFieldInt {
	constructor() {
		super();
		this.min = 0;
		this.max = 0;
	}

	/**
	 * Getter $min
	 * @return {number}
	 */
	public get $min(): number {
		return this.min;
	}

	/**
	 * Getter $max
	 * @return {number}
	 */
	public get $max(): number {
		return this.max;
	}

	/**
	 * Setter $min
	 * @param {number} value
	 */
	public set $min(value: number) {
		this.min = value;
	}

	/**
	 * Setter $max
	 * @param {number} value
	 */
	public set $max(value: number) {
		this.max = value;
	}
}
