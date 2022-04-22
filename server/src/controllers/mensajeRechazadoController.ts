import { Request, Response } from 'express';

import pool from '../database'

class MensajeRechazadoController {
    mensaje: string = '';
	public async mensajeRechazar(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query(`UPDATE visita SET mensaje= ? WHERE idvisita = ?`, [req.body ,id]);
        res.json({text: 'actualizando'})
    }

}
export const mensajeRechazadoController = new MensajeRechazadoController();