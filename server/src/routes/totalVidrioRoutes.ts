import { Router } from 'express';

import { totalVidrioController } from '../controllers/totalVidrioController';

class TotalVidrioRoutes {
	public router: Router = Router();

	constructor() {
		this.config();
	}
	config(): void {
		this.router.get('/', totalVidrioController.obtenerTotalVidrio);		
	}
}

const totalVidrioRoutes = new TotalVidrioRoutes();
export default totalVidrioRoutes.router;