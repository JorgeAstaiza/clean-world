import { Request, Response } from 'express';

import pool from '../database'

class TotalVidrioController {

	public async obtenerTotalVidrio(req: Request, res: Response): Promise<void>{
        const totalVidrio = await pool.query(`SELECT SUM(residuo.peso) as totalVidrio FROM residuo
        INNER JOIN visita ON (visita.idvisita = residuo.visita_idvisita)
        WHERE residuo.tipo = 'Vidrio';`)
        res.json(totalVidrio)
    }

}
export const totalVidrioController = new TotalVidrioController();