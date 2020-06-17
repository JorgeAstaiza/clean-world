import { Request, Response } from 'express';

import pool from '../database'

class MensajeRechazadoController {

	public async mensajeRechazar(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const mensaje = req.body
        await pool.query(`UPDATE visita SET mensaje = "?" WHERE idvisita = ?`, [req.body, id])
        res.json({text: mensaje})
    }

}
export const mensajeRechazadoController = new MensajeRechazadoController();