import { Router } from 'express';

import { totalLatasController } from '../controllers/totalLatasController';

class TotalLatasRoutes {
	public router: Router = Router();

	constructor() {
		this.config();
	}
	config(): void {
		this.router.get('/', totalLatasController.obtenerTotalLatas);		
	}
}

const totalLatasRoutes = new TotalLatasRoutes();
export default totalLatasRoutes.router;