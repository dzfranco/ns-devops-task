import { controller, interfaces, httpPost, httpGet } from 'inversify-express-utils';
import { Request, Response, NextFunction } from 'express';
import { inject } from 'inversify';
import { DATABASE_IDENTIFIER } from '../../common/constants/identifiers';
import { MyDatabaseI } from '../../common/interfaces/imongo';

@controller('/occupations')
class PlaidWebhooksController implements interfaces.Controller {
	private myDatabase: MyDatabaseI;

	constructor(@inject(DATABASE_IDENTIFIER.MYDATABASE) $myDatabase: MyDatabaseI) {
		this.myDatabase = $myDatabase;
	}

	@httpGet('/')
	public async getOccupations(req: Request, res: Response, next: NextFunction) {
		const occupations = await this.myDatabase.Occupation.find().toArray();
		return res.send(occupations);
	}
}

export default PlaidWebhooksController;
