import { Router } from 'express';

import { totalPlasticoController } from '../controllers/totalPlasticoController';

class TotalPlasticoRouter {
	public router: Router = Router();

	constructor() {
		this.config();
	}
	config(): void {
		this.router.get('/', totalPlasticoController.obtenerTotalPlastico);		
	}
}

const totalPlasticoRouter = new TotalPlasticoRouter();
export default totalPlasticoRouter.router;