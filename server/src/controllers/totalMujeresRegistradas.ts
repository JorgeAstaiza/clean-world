import { Request, Response } from 'express';

import pool from '../database'

class TotalMujeresRegistradas {

	public async totalMuejeresRegistradas(req: Request, res: Response): Promise<void>{
        const totalMujeres = await pool.query(`select count(genero) as mujeres from usuario where genero = "femenino"`)
        res.json(totalMujeres)
    }

}
export const totalMujeresRegistradas = new TotalMujeresRegistradas();