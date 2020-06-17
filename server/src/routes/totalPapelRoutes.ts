import { Router } from 'express';

import { totalPapelController } from '../controllers/totalPapelController';

class TotalPapelRouter {
	public router: Router = Router();

	constructor() {
		this.config();
	}
	config(): void {
		this.router.get('/', totalPapelController.obtenerTotalPapel);		
	}
}

const totalPapelRouter = new TotalPapelRouter();
export default totalPapelRouter.router;