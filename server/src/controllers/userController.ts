import { Request, Response } from 'express';

import pool from '../database'

class UserController {
	public async listUser(req: Request, res: Response) {
		const usuarios = await pool.query('SELECT * FROM usuario')
		res.json(usuarios)
	}
	public async getOne(req: Request, res: Response): Promise<any>{
		const { id } = req.params;
		const usuario = await pool.query('SELECT * FROM usuario WHERE idusuario = ?', [id]);
		if(usuario.length > 0){
			return res.json(usuario[0]);
		}
		res.status(404).json({text: 'usuario no encontrado'})
	}
	public async createUser(req: Request, res: Response): Promise<void>{
	
		await pool.query('INSERT INTO usuario set ?', [req.body]);
		res.json({text: 'creando un usuario'})
	}


	public async deleteUser(req: Request, res: Response): Promise<void>{
		const { id } = req.params;
		await pool.query('DELETE FROM usuario WHERE idusuario = ?', [id])
		res.json({text: 'eliminando operador'})
	}

	public async updateUser(req: Request, res: Response): Promise<void>{
		const { id } = req.params;
		await pool.query('UPDATE usuario set ? WHERE idusuario = ?', [req.body, id])
		res.json({text: 'actualizando'})
	}

}
export const userController = new UserController();