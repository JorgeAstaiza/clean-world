import { Request, Response } from 'express';

import pool from '../database'

class TotalCartonController {

	public async obtenerTotalCarton(req: Request, res: Response): Promise<void>{
        const totalCarton = await pool.query(`SELECT SUM(residuo.peso) as totalCarton FROM residuo
        INNER JOIN visita ON (visita.idvisita = residuo.visita_idvisita)
        WHERE residuo.tipo = 'Carton';`)
        res.json(totalCarton)
    }

}
export const totalCartonController = new TotalCartonController();