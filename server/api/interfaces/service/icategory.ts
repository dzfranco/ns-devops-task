import { Category } from '../../../common/models/category.model';

export interface ICategoryService {
	getCategories(page: number, limit: number, type: string): Promise<Category[]>;
}
