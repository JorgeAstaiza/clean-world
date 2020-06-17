import { Router } from 'express';

import { mensajeRechazadoController } from '../controllers/mensajeRechazadoController';

class MensajeRechazadoRouter {
	public router: Router = Router();

	constructor() {
		this.config();
	}
	config(): void {
		this.router.put('/:id', mensajeRechazadoController.mensajeRechazar);		
	}
}

const mensajeRechazadoRouter = new MensajeRechazadoRouter();
export default mensajeRechazadoRouter.router;