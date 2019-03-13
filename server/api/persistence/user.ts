import * as _ from 'lodash';
import { injectable, inject } from 'inversify';
import { User } from '../../common/models/user/user.model';
import { IUserPersistence, IProviderAWSUser, IBaseAWSUser } from '../interfaces/persistence/iuser.persistence';
import { DATABASE_IDENTIFIER } from '../../common/constants/identifiers';
import { MyDatabaseI } from '../../common/interfaces/imongo';
import { RegisterUserInput } from '../../graphql/types/input/user';
import { toObjectID } from 'iridium';
import { startOfMonth, endOfMonth, setMonth } from 'date-fns';
import { RangeFieldInt } from '../../common/models/helpers/range-int';
import { plainToClass } from 'class-transformer';
import { UserDTO } from '../../common/models/user/user.dto';

@injectable()
export class UserPersistence implements IUserPersistence {
	private myDatabase: MyDatabaseI;
	constructor(@inject(DATABASE_IDENTIFIER.MYDATABASE) database: MyDatabaseI) {
		this.myDatabase = database;
	}

	public async setUserData(user: User, userChanges: RegisterUserInput): Promise<User> {
		for (const key in userChanges) {
			if (userChanges[key] !== undefined) {
				user[key] = userChanges[key];
			}
		}
		try {
			const newUser = await user.save();
			return newUser;
		} catch (error) {
			throw error;
		}
	}

	public async getUserById(userId: string): Promise<User> {
		const foundUser = await this.myDatabase.User.findOne({ _id: toObjectID(userId) });
		return foundUser;
	}

	public async getByAWSId(awsId: string): Promise<User> {
		const user: User = await this.myDatabase.User.findOne({ awsId });
		return user;
	}

	public async getAll(): Promise<User[]> {
		const users: User[] = await this.myDatabase.User.find().toArray();
		return users;
	}

	public async registerAwsProviderUser(userData: IProviderAWSUser): Promise<User> {
		const user: User = await this.myDatabase.User.insert(userData);
		return user;
	}

	public async registerAwsUser(userData: IBaseAWSUser) {
		const user: User = await this.myDatabase.User.insert(userData);
		return user;
	}

	/**
	 * @description Fetches the users with monthly income according to the filters given by the parameters
	 * @param {string} searchTerm - Becomes a regex which will be the basis to search for name and email
	 * @param {string} currency - Currency in ISO 4217 format
	 * @param {RangeFieldInt} incomeFilter - Monthly income filter with min and max range
	 * @param {RangeFieldInt} ageFilter - Age filter with min and max range
	 * @param {number} page - The page number
	 * @param {number} limit - Amount of results per page
	 */
	public async getUsersWithMonthlyIncome(
		searchTerm: string,
		currency: string,
		incomeFilter: RangeFieldInt,
		ageFilter: RangeFieldInt,
		sort: { field: string; order: number },
		page: number,
		limit: number
	): Promise<UserDTO[]> {
		const startDate = startOfMonth(new Date());
		const endDate = endOfMonth(new Date());

		// Matches the name or email with the search term
		const searchNameStage = {
			$match: {
				$or: [
					{
						name: new RegExp(searchTerm, 'i'),
					},
					{
						email: new RegExp(searchTerm, 'i'),
					},
					{
						nickname: new RegExp(searchTerm, 'i'),
					},
				],
			},
		};
		// Joins joins income sources and gets only selected dates
		const joinWithIncomeSourcesStage = {
			$lookup: {
				from: 'income_sources',
				let: {
					user: '$_id',
				},
				pipeline: [
					{
						$match: {
							$expr: {
								$and: [
									{
										$eq: ['$user', '$$user'],
									},
									{
										$eq: ['$currency', currency],
									},
									{
										$gte: ['$date', startDate],
									},
									{
										$lte: ['$date', endDate],
									},
								],
							},
						},
					},
					{
						$project: {
							amount: 1,
							taxPercentage: 1,
						},
					},
				],
				as: 'incomeSources',
			},
		};
		// Project stage, reduces an array to the monthlyIncome field
		const projectionStage = {
			$project: {
				_id: { $toString: '$_id' },
				name: 1,
				email: 1,
				awsId: 1,
				providerName: 1,
				createdAt: 1,
				updatedAt: 1,
				age: 1,
				maritalStatus: 1,
				sex: 1,
				zip: 1,
				occupation: 1,
				monthlyIncome: {
					$reduce: {
						input: '$incomeSources',
						initialValue: 0,
						in: {
							$sum: ['$$value', '$$this.amount'],
						},
					},
				},
			},
		};

		// Skip and limit
		const skipStage = {
			$skip: (page - 1) * limit,
		};
		const limitStage = {
			$limit: limit,
		};

		const pipeline = [];
		pipeline.push(searchNameStage);
		pipeline.push(joinWithIncomeSourcesStage);
		pipeline.push(projectionStage);
		if (!_.isNil(incomeFilter) || !_.isNil(ageFilter)) {
			const conditions = [];
			if (!_.isNil(incomeFilter)) {
				conditions.push(
					{
						$gte: ['$monthlyIncome', incomeFilter.$min],
					},
					{
						$lte: ['$monthlyIncome', incomeFilter.$max],
					}
				);
			}
			if (!_.isNil(ageFilter)) {
				conditions.push(
					{
						$gte: ['$age', ageFilter.$min],
					},
					{
						$lte: ['$age', ageFilter.$max],
					}
				);
			}
			// Filter stage
			const filterStage = {
				$match: {
					$expr: {
						$and: conditions,
					},
				},
			};
			pipeline.push(filterStage);
		}
		if (!_.isNil(sort)) {
			const sortingStage = {
				$sort: { [sort.field]: sort.order },
			};
			pipeline.push(sortingStage);
		}

		pipeline.push(skipStage);
		pipeline.push(limitStage);

		const foundUsers = await this.myDatabase.User.aggregate(pipeline);
		const formattedUsers: UserDTO[] = foundUsers.map(user => plainToClass(UserDTO, user as UserDTO));
		return formattedUsers;
	}
}
