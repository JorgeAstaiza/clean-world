import { Request, Response } from 'express';

import pool from '../database'

class RechazarSolicitudesController {
	public async rechazarSolicitud(req: Request, res: Response): Promise<void>{
		const { id } = req.params;
		await pool.query('UPDATE visita set estado = "rechazado" WHERE idvisita = ?', [id])
		res.json({text: 'rechazada'})
		console.log('rechaza');
	}

}
export const rechazarSolicitudesController = new RechazarSolicitudesController();