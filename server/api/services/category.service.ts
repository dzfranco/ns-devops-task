import { injectable, inject } from 'inversify';
import { ICategoryService } from '../interfaces/service/icategory';
import { PERSISTENCE_IDENTIFIERS } from '../../common/constants/identifiers';
import { ICategoryPersistence } from '../interfaces/persistence/icategory.persistence';
import { Category } from '../../common/models/category.model';

@injectable()
export class CategoryService implements ICategoryService {
	private categoryPersistence: ICategoryPersistence;
	constructor(@inject(PERSISTENCE_IDENTIFIERS.CATEGORY) categoryPersistence: ICategoryPersistence) {
		this.categoryPersistence = categoryPersistence;
	}
	public async getCategories(page: number, limit: number, type: string): Promise<Category[]> {
		const categories = await this.categoryPersistence.getCategories(page, limit, type);
		return categories;
	}
}
