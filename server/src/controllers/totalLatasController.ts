import { Request, Response } from 'express';

import pool from '../database'

class TotalLatasController {

	public async obtenerTotalLatas(req: Request, res: Response): Promise<void>{
        const totalLatas = await pool.query(`SELECT SUM(residuo.peso) as totalLatas FROM residuo
        INNER JOIN visita ON (visita.idvisita = residuo.visita_idvisita)
        WHERE residuo.tipo = 'Latas';`)
        res.json(totalLatas)
    }

}
export const totalLatasController = new TotalLatasController();