import * as _ from 'lodash';

import { injectable, inject } from 'inversify';

import { User } from '../../common/models/user/user.model';
import { IAWSIdentityToken } from '../interfaces/external/iawstoken';
import { IUserPersistence, IBaseAWSUser, IProviderAWSUser } from '../interfaces/persistence/iuser.persistence';
import { ICustomCategoryService } from '../interfaces/service/icustom-category';
import { IIncomeSourceService } from '../interfaces/service/iincome-source';
import IUserService from '../interfaces/service/iuser';
import IDGenerator from '../../common/config/utils';
import { BASE_CATEGORIES_CONSTANTS, BASE_CATEGTORY_TYPES } from '../../common/constants/base-categories';
import { CURRENCY_US_DOLLAR_ISO } from '../../common/constants/currencies';
import { PERSISTENCE_IDENTIFIERS, SERVICE_IDENTIFIER } from '../../common/constants/identifiers';
import { IIncomeSource } from '../../common/models/income-source';
import { RegisterUserInput, OnboardingUserInput } from '../../graphql/types/input/user';
import { RangeFieldInt } from '../../common/models/helpers/range-int';
import { UserDTO } from '../../common/models/user/user.dto';

/**
 * User Service for User Identity and Authentication
 * Placeholder implementation
 */
@injectable()
class UserService implements IUserService {
	private userPersistence: IUserPersistence;
	private customCategoryService: ICustomCategoryService;
	private incomeSourceService: IIncomeSourceService;
	constructor(
		@inject(PERSISTENCE_IDENTIFIERS.USER) userPersistence: IUserPersistence,
		@inject(SERVICE_IDENTIFIER.CUSTOM_CATEGORY) customCategoryService: ICustomCategoryService,
		@inject(SERVICE_IDENTIFIER.INCOME_SOURCE) incomeSourceService: IIncomeSourceService
	) {
		this.userPersistence = userPersistence;
		this.customCategoryService = customCategoryService;
		this.incomeSourceService = incomeSourceService;
	}

	public async getAll() {
		const users: User[] = await this.userPersistence.getAll();
		return users;
	}

	/**
	 * @description Gets a user given its id
	 * @param userId
	 */
	public async getUserById(userId: string): Promise<User> {
		const foundUser = this.userPersistence.getUserById(userId);
		return foundUser;
	}

	/**
	 * @description Gets the user info using the AWS ID
	 * @param {string} awsId - ID Given by AWS Cognito
	 */
	public async getUserByAWSId(awsId: string): Promise<User> {
		const foundUser = await this.userPersistence.getByAWSId(awsId);
		return foundUser;
	}

	/**
	 * @description Sets the user onboarding data, including the new income
	 * @param {string} awsId - The uers's AWS ID
	 * @param {OnboardingUserInput} userChanges - Settings to insert
	 */
	public async userOnboarding(awsId: string, userChanges: OnboardingUserInput): Promise<User> {
		const foundUser = await this.userPersistence.getByAWSId(awsId);
		const createdCategories = await this.customCategoryService.seedForUser(foundUser._id);
		const salaryCategory = createdCategories.find(category => category.type === BASE_CATEGTORY_TYPES.INCOME);

		const userIncome: IIncomeSource = {
			user: foundUser._id,
			customCategory: salaryCategory._id,
			name: BASE_CATEGORIES_CONSTANTS.PRIMARY_JOB,
			amount: userChanges.monthlyIncome,
			currency: userChanges.currency ? userChanges.currency : CURRENCY_US_DOLLAR_ISO,
			taxPercentage: 0,
			active: true,
			hasCarriedOver: false,
			timezone: '',
			date: new Date(),
			createdAt: new Date(),
			updatedAt: new Date(),
		};
		await this.incomeSourceService.createIncomeSource(userIncome);
		delete userChanges.monthlyIncome;

		return this.userPersistence.setUserData(foundUser, userChanges);
	}

	/**
	 * @description Registers a new user based on the token given by AWS Cognito
	 * If the user is already registered, this will return the user that matches the
	 * sub field from the AWS id token.
	 * @param {IAWSIdentityToken} parsedAwsData - The parsed and validated AWS Token
	 * @returns {Promise<User>} - A promise with the registered User
	 */
	public async registerAwsUser(parsedAwsData: IAWSIdentityToken): Promise<User> {
		const foundUser = await this.userPersistence.getByAWSId(parsedAwsData.sub);
		if (!_.isNil(foundUser)) {
			return foundUser;
		}
		let newUser: User;
		if (_.isNil(parsedAwsData.identities)) {
			const userDataNoProvider: IBaseAWSUser = {
				name: parsedAwsData.name,
				email: parsedAwsData.email,
				awsId: parsedAwsData.sub,
			};
			newUser = await this.userPersistence.registerAwsUser(userDataNoProvider);
			return newUser;
		}
		const userDataProvider: IProviderAWSUser = {
			name: parsedAwsData.name,
			email: parsedAwsData.email,
			awsId: parsedAwsData.sub,
			providerName: parsedAwsData.identities[0].providerName,
		};
		newUser = await this.userPersistence.registerAwsProviderUser(userDataProvider);
		return newUser;
	}

	public async setUserData(awsId: string, data: RegisterUserInput) {
		const foundUser = await this.userPersistence.getByAWSId(awsId);
		return this.userPersistence.setUserData(foundUser, data);
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
		const foundUsers = await this.userPersistence.getUsersWithMonthlyIncome(
			searchTerm,
			currency,
			incomeFilter,
			ageFilter,
			sort,
			page,
			limit
		);
		return foundUsers;
	}

	/**
	 * Validated email and password
	 * @param email Email
	 * @param password Password
	 */
	public validateEmailAndPassword(email, password): boolean {
		return true;
	}

	/**
	 * Get corresponding user Id for registered user
	 * Placeholder function - dummy implementation
	 * @param email User email ID
	 */
	public findUserIdForEmail(email): string {
		return IDGenerator();
	}
}

export default UserService;
