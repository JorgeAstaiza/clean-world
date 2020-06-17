import { Request, Response } from 'express';

import pool from '../database'

class TotalRegistrosMesDiciembre {

	public async totalRegistrosMesDiciembre(req: Request, res: Response): Promise<void>{
        const totalDiciembre = await pool.query(`select count(*) as regisDiciembre from usuario where fecha_registo between '2019-12-01' and '2019-12-30'`)
        res.json(totalDiciembre)
    }

}
export const totalRegistrosMesDiciembre = new TotalRegistrosMesDiciembre();