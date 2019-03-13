import { injectable, inject } from 'inversify';
import { ICustomSubCategoryService } from '../interfaces/service/icustom-subcategory';
import { ICustomSubCategoryPersistence } from '../interfaces/persistence/icustom-subcategory.persistence';
import { ICustomSubCategory, CustomSubCategory } from '../../common/models/subcategory';
import { PERSISTENCE_IDENTIFIERS } from '../../common/constants/identifiers';

@injectable()
export class CustomSubCategoryService implements ICustomSubCategoryService {
	private customSubCategoryPersistence: ICustomSubCategoryPersistence;

	constructor(@inject(PERSISTENCE_IDENTIFIERS.CUSTOM_SUBCATEGORY) customSubcategoryPersistence) {
		this.customSubCategoryPersistence = customSubcategoryPersistence;
	}
	/**
	 * @description Creates a batch of subcategories
	 * @param {string} userId - The user who created the categories
	 * @param {string} categoryId - The category that the subcategories belong to
	 * @param {string[]} names - The names of the subcategories
	 */
	public async createCustomSubCategories(
		userId: string,
		categoryId: string,
		names: string[]
	): Promise<CustomSubCategory[]> {
		const subcategories: ICustomSubCategory[] = names.map((name: string) => {
			const subcategory: ICustomSubCategory = {
				name,
				user: userId,
				category: categoryId,
			};
			return subcategory;
		});
		const savedSubcategories = await this.customSubCategoryPersistence.createCustomSubCategories(subcategories);
		return savedSubcategories;
	}
	/**
	 * @description Fetches subcategories belonging to a category. Only works for the user that owns the categories
	 * @param {string} categoryId - The category to fetch
	 * @param {string} userId - The user that the category belongs to
	 */
	public async fetchSubcategoriesByCategory(categoryId: string, userId: string): Promise<CustomSubCategory[]> {
		const foundSubcategories = await this.customSubCategoryPersistence.fetchSubcategoriesByCategory(
			categoryId,
			userId
		);
		return foundSubcategories;
	}
}
