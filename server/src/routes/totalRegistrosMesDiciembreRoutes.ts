import { Router } from 'express';

import { totalRegistrosMesDiciembre } from '../controllers/totalRegistrosMesDiciembre';

class TotalRegistroMesDiciembre {
	public router: Router = Router();

	constructor() {
		this.config();
	}
	config(): void {
		this.router.get('/', totalRegistrosMesDiciembre.totalRegistrosMesDiciembre);		
	}
}

const totalRegistroMesDiciembre = new TotalRegistroMesDiciembre();
export default totalRegistroMesDiciembre.router;