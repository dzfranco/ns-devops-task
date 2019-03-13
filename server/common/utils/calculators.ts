export class CalculatorUtils {
	/**
	 * @description Deduces the tax from an amount
	 * @param {number} amount - The original, untaxed amount
	 * @param {number} taxPercentage - The amount of tax percentage to apply
	 * @returns number - The new amount with deduced taxes
	 */
	public static deduceTax(amount: number, taxPercentage: number = 0) {
		const toRemove = 1 - taxPercentage * 0.01;
		const newTotal = amount * toRemove;
		return newTotal;
	}
}
