import { Request, Response } from 'express';

import pool from '../database'

class TotalPlasticoController {

	public async obtenerTotalPlastico(req: Request, res: Response): Promise<void>{
        const totalPlastico = await pool.query(`SELECT SUM(residuo.peso) as totalPlastico FROM residuo
        INNER JOIN visita ON (visita.idvisita = residuo.visita_idvisita)
        WHERE residuo.tipo = 'Plástico';`)
        res.json(totalPlastico)
    }

}
export const totalPlasticoController = new TotalPlasticoController();