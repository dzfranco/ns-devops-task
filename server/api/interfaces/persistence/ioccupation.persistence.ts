import { Occupation } from '../../../common/models/occupation/occupation.model';
export interface IOccupationPeristence {
	/**
	 * @description Gets occupations matching the query as a regex
	 * @param searchQuery
	 * @param locale
	 * @param page
	 * @param limit
	 */
	getOccupations(searchQuery: string, locale: string, page: number, limit: number): Promise<Occupation[]>;
}
