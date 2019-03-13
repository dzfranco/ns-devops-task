import { IUserFinancial } from './iuser-financial';
import { ObjectType } from 'type-graphql';

@ObjectType({ implements: IUserFinancial })
export class UserFinancialDTO {
	private dayRecurringExpenses: number;
	private totalSpentToday: number;
	private monthlyIncome: number;
	private monthlyExpenses: number;
	private dailyBudget: number;

	/**
	 * Getter $dayRecurringExpenses
	 * @return {number}
	 */
	public get $dayRecurringExpenses(): number {
		return this.dayRecurringExpenses;
	}

	/**
	 * Getter $totalSpentToday
	 * @return {number}
	 */
	public get $totalSpentToday(): number {
		return this.totalSpentToday;
	}

	/**
	 * Getter $monthlyIncome
	 * @return {number}
	 */
	public get $monthlyIncome(): number {
		return this.monthlyIncome;
	}

	/**
	 * Getter $monthlyExpenses
	 * @return {number}
	 */
	public get $monthlyExpenses(): number {
		return this.monthlyExpenses;
	}

	/**
	 * Getter $dailyBudget
	 * @return {number}
	 */
	public get $dailyBudget(): number {
		return this.dailyBudget;
	}

	/**
	 * Getter $user
	 * @return {string}
	 */
	public get $user(): string {
		return this.user;
	}

	/**
	 * Setter $dayRecurringExpenses
	 * @param {number} value
	 */
	public set $dayRecurringExpenses(value: number) {
		this.dayRecurringExpenses = value;
	}

	/**
	 * Setter $totalSpentToday
	 * @param {number} value
	 */
	public set $totalSpentToday(value: number) {
		this.totalSpentToday = value;
	}

	/**
	 * Setter $monthlyIncome
	 * @param {number} value
	 */
	public set $monthlyIncome(value: number) {
		this.monthlyIncome = value;
	}

	/**
	 * Setter $monthlyExpenses
	 * @param {number} value
	 */
	public set $monthlyExpenses(value: number) {
		this.monthlyExpenses = value;
	}

	/**
	 * Setter $dailyBudget
	 * @param {number} value
	 */
	public set $dailyBudget(value: number) {
		this.dailyBudget = value;
	}

	/**
	 * Setter $user
	 * @param {string} value
	 */
	public set $user(value: string) {
		this.user = value;
	}
	private user: string;
}
