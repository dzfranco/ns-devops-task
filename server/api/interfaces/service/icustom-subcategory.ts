import { CustomSubCategory } from '../../../common/models/subcategory';

export interface ICustomSubCategoryService {
	createCustomSubCategories(userId: string, categoryId: string, names: string[]): Promise<CustomSubCategory[]>;
	fetchSubcategoriesByCategory(categoryId: string, userId: string): Promise<CustomSubCategory[]>;
}
