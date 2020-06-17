import { Router } from 'express';

import { totalMujeresRegistradas } from '../controllers/totalMujeresRegistradas';

class TotalMujeres {
	public router: Router = Router();

	constructor() {
		this.config();
	}
	config(): void {
		this.router.get('/', totalMujeresRegistradas.totalMuejeresRegistradas);		
	}
}

const totalMujeres = new TotalMujeres();
export default totalMujeres.router;