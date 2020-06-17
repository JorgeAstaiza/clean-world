import { Router } from 'express';

import { totalHombresRegistrados } from '../controllers/totalHombresRegistrados';

class TotalHombres {
	public router: Router = Router();

	constructor() {
		this.config();
	}
	config(): void {
		this.router.get('/', totalHombresRegistrados.totalHombresRegistrados);		
	}
}

const totalHombres = new TotalHombres();
export default totalHombres.router;