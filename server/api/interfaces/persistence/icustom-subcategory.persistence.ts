import { ICustomSubCategory, CustomSubCategory } from '../../../common/models/subcategory';
export interface ICustomSubCategoryPersistence {
	createCustomSubCategories(subCategories: ICustomSubCategory[]): Promise<CustomSubCategory[]>;
	fetchSubcategoriesByCategory(categoryId: string, userId: string): Promise<CustomSubCategory[]>;
}
