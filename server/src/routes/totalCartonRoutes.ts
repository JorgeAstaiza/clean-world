import { Router } from 'express';

import { totalCartonController } from '../controllers/totalCartonController';

class TotalCartonRouter {
	public router: Router = Router();

	constructor() {
		this.config();
	}
	config(): void {
		this.router.get('/', totalCartonController.obtenerTotalCarton);		
	}
}

const totalCartonRouter = new TotalCartonRouter();
export default totalCartonRouter.router;