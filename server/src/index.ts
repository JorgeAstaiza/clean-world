import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

//importo rutas
import indexRoutes from './routes/indexRoutes';
import operatorRoutes from './routes/operatorRoutes';
import userRoutes from './routes/userRoutes';
import rankingRoutes from './routes/rankingRoutes';
import solicitudesPendientesRoutes from './routes/solicitudesPendientesRoutes';
import rechazarSolicitudesRoutes from './routes/rechazarSolicitudesRoutes';
import mensajeRechazadoRoutes from './routes/mensajeRechazadoRoutes';
import totalPlasticoRoutes from './routes/totalPlasticoRoutes';
import totalPapelRoutes from './routes/totalPapelRoutes';
import totalCartonRoutes from './routes/totalCartonRoutes';
import totalVidrioRoutes from './routes/totalVidrioRoutes';
import totalLatasRoutes from './routes/totalLatasRoutes';
import totalMujeresRoutes from './routes/totalMujeresRoutes';
import totalHombresRoutes from './routes/totalHombresRoutes';
import totalRegistroMesNoviembreRoutes from './routes/totalRegistroMesNoviembreRoutes';
import totalRegistroMesDiciembre from './routes/totalRegistrosMesDiciembreRoutes';
import totalRegistrosMesEneroRoutes from './routes/totalRegistrosMesEneroRoutes';

class Server {

	public app: Application

	constructor() {
		this.app = express();
		this.config();
		this.routes();
	}

	config(): void {
		this.app.set('port', process.env.PORT || 3000) //defino el puerto del servidor
		this.app.use(morgan('dev')) //para poder ver las peticiones por consola
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({extended: true}));
	}
	routes(): void {
		this.app.use('/login', indexRoutes);
		this.app.use('/api/usuarios', userRoutes); 
		this.app.use('/api/operarios', operatorRoutes);
		this.app.use('/api/ranking', rankingRoutes);
		this.app.use('/api/solicitudes', solicitudesPendientesRoutes);
		this.app.use('/api/rechazar', rechazarSolicitudesRoutes);
		this.app.use('/api/mensaje-rechazar', mensajeRechazadoRoutes);
		this.app.use('/api/total-plastico', totalPlasticoRoutes)
		this.app.use('/api/total-papel', totalPapelRoutes)
		this.app.use('/api/total-carton', totalCartonRoutes)
		this.app.use('/api/total-vidrio', totalVidrioRoutes)
		this.app.use('/api/total-latas', totalLatasRoutes)
		this.app.use('/api/total-mujeres', totalMujeresRoutes)
		this.app.use('/api/total-hombres', totalHombresRoutes)
		this.app.use('/api/total-reg-noviembre', totalRegistroMesNoviembreRoutes)
		this.app.use('/api/total-reg-diciembre', totalRegistroMesDiciembre)
		this.app.use('/api/total-reg-enero', totalRegistrosMesEneroRoutes)

	}
	//inicio el servidor con express
	start(): void {
		this.app.listen(this.app.get('port'), () => {
			console.log('server on ', this.app.get('port'));
		});
	}
}

const server = new Server();
server.start();