import { Request, Response } from 'express';

import pool from '../database'

class TotalRegistrosMesEnero {

	public async totalRegistrosMesEnero(req: Request, res: Response): Promise<void>{
        const totalEnero = await pool.query(`select count(*) as regisEnero from usuario where fecha_registo between '2020-01-01' and '2020-01-30'`)
        res.json(totalEnero)
    }

}
export const totalRegistrosMesEnero = new TotalRegistrosMesEnero();