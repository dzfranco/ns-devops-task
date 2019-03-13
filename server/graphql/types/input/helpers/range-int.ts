import { InputType, Int, Field } from 'type-graphql';
import { IRangeFieldInt } from '../../../../common/models/helpers/range-int';

@InputType()
export class RangeFieldIntInput {
	@Field(type => Int)
	private min: number;
	@Field(type => Int)
	private max: number;

	constructor() {
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
