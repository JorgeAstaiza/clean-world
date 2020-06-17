import { Router } from 'express';

import { totalRegistrosMesNoviembre } from '../controllers/totalRegistrosMesNoviembre';

class TotalRegistroMesNoviembre {
	public router: Router = Router();

	constructor() {
		this.config();
	}
	config(): void {
		this.router.get('/', totalRegistrosMesNoviembre.totalRegistrosMesNoviembre);		
	}
}

const totalRegistroMesNoviembre = new TotalRegistroMesNoviembre();
export default totalRegistroMesNoviembre.router;