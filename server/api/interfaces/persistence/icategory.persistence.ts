import { Category } from '../../../common/models/category.model';
export interface ICategoryPersistence {
	getCategories(page: number, limit: number, type: string): Promise<Category[]>;
}
