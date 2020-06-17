import { Request, Response } from 'express';

import pool from '../database'

class TotalPapelController {

	public async obtenerTotalPapel(req: Request, res: Response): Promise<void>{
        const totalPapel = await pool.query(`SELECT SUM(residuo.peso) as totalPapel FROM residuo
        INNER JOIN visita ON (visita.idvisita = residuo.visita_idvisita)
        WHERE residuo.tipo = 'Papel';`)
        res.json(totalPapel)
    }

}
export const totalPapelController = new TotalPapelController();