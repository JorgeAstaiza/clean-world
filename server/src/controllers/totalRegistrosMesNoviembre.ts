import { Request, Response } from 'express';

import pool from '../database'

class TotalRegistrosMesNoviembre {

	public async totalRegistrosMesNoviembre(req: Request, res: Response): Promise<void>{
        const totalLatas = await pool.query(`select count(*) as regisNoviembre from usuario where fecha_registo between '2020-11-01' and '2020-11-30'`)
        res.json(totalLatas)
    }

}
export const totalRegistrosMesNoviembre = new TotalRegistrosMesNoviembre();