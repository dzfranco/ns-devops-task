import { injectable, inject } from 'inversify';
import { IOccupationService } from '../interfaces/service/ioccupation';
import { Occupation } from '../../common/models/occupation/occupation.model';
import { IOccupationPeristence } from '../interfaces/persistence/ioccupation.persistence';
import { PERSISTENCE_IDENTIFIERS } from '../../common/constants/identifiers';

@injectable()
export class OccupationService implements IOccupationService {
	private occupationPersistence: IOccupationPeristence;

	constructor(@inject(PERSISTENCE_IDENTIFIERS.OCCUPATION) occupationPersistence: IOccupationPeristence) {
		this.occupationPersistence = occupationPersistence;
	}

	/**
	 * @description Gets occupations matching the query as a regex
	 * @param searchQuery
	 * @param locale
	 * @param page
	 * @param limit
	 */
	public async getOccupations(
		searchQuery: string,
		locale: string,
		page: number,
		limit: number
	): Promise<Occupation[]> {
		const newQuery = searchQuery.trim();
		const foundOccupations = await this.occupationPersistence.getOccupations(newQuery, locale, page, limit);
		return foundOccupations;
	}
}
