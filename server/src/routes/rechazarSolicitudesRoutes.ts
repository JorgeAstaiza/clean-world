import { Router } from 'express';

import { rechazarSolicitudesController } from '../controllers/rechazarSolicitudesController';
class RechazarSolicitudesRouter {
	public router: Router = Router();

	constructor() {
		this.config();
	}
	config(): void {
		this.router.put('/:id', rechazarSolicitudesController.rechazarSolicitud);		
	}
}

const rechazarSolicitudesRouter = new RechazarSolicitudesRouter();
export default rechazarSolicitudesRouter.router;