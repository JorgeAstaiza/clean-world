import { Request, Response } from 'express';

import pool from '../database'

class TotalHombresRegistrados {

	public async totalHombresRegistrados(req: Request, res: Response): Promise<void>{
        const totalHombres = await pool.query(`select count(genero) as hombres from usuario where genero = "masculino"`)
        res.json(totalHombres)
    }

}
export const totalHombresRegistrados = new TotalHombresRegistrados();