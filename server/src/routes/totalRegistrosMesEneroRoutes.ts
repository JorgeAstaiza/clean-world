import { Router } from 'express';

import { totalRegistrosMesEnero } from '../controllers/totalRegistrosMesEnero';

class TotalRegistroMesEnero {
	public router: Router = Router();

	constructor() {
		this.config();
	}
	config(): void {
		this.router.get('/', totalRegistrosMesEnero.totalRegistrosMesEnero);		
	}
}

const totalRegistroMesEnero = new TotalRegistroMesEnero();
export default totalRegistroMesEnero.router;