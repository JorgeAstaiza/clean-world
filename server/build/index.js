"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//importo rutas
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const operatorRoutes_1 = __importDefault(require("./routes/operatorRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const rankingRoutes_1 = __importDefault(require("./routes/rankingRoutes"));
const solicitudesPendientesRoutes_1 = __importDefault(require("./routes/solicitudesPendientesRoutes"));
const rechazarSolicitudesRoutes_1 = __importDefault(require("./routes/rechazarSolicitudesRoutes"));
const mensajeRechazadoRoutes_1 = __importDefault(require("./routes/mensajeRechazadoRoutes"));
const totalPlasticoRoutes_1 = __importDefault(require("./routes/totalPlasticoRoutes"));
const totalPapelRoutes_1 = __importDefault(require("./routes/totalPapelRoutes"));
const totalCartonRoutes_1 = __importDefault(require("./routes/totalCartonRoutes"));
const totalVidrioRoutes_1 = __importDefault(require("./routes/totalVidrioRoutes"));
const totalLatasRoutes_1 = __importDefault(require("./routes/totalLatasRoutes"));
const totalMujeresRoutes_1 = __importDefault(require("./routes/totalMujeresRoutes"));
const totalHombresRoutes_1 = __importDefault(require("./routes/totalHombresRoutes"));
const totalRegistroMesNoviembreRoutes_1 = __importDefault(require("./routes/totalRegistroMesNoviembreRoutes"));
const totalRegistrosMesDiciembreRoutes_1 = __importDefault(require("./routes/totalRegistrosMesDiciembreRoutes"));
const totalRegistrosMesEneroRoutes_1 = __importDefault(require("./routes/totalRegistrosMesEneroRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000); //defino el puerto del servidor
        this.app.use(morgan_1.default('dev')); //para poder ver las peticiones por consola
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/login', indexRoutes_1.default);
        this.app.use('/api/usuarios', userRoutes_1.default);
        this.app.use('/api/operarios', operatorRoutes_1.default);
        this.app.use('/api/ranking', rankingRoutes_1.default);
        this.app.use('/api/solicitudes', solicitudesPendientesRoutes_1.default);
        this.app.use('/api/rechazar', rechazarSolicitudesRoutes_1.default);
        this.app.use('/api/mensaje-rechazar', mensajeRechazadoRoutes_1.default);
        this.app.use('/api/total-plastico', totalPlasticoRoutes_1.default);
        this.app.use('/api/total-papel', totalPapelRoutes_1.default);
        this.app.use('/api/total-carton', totalCartonRoutes_1.default);
        this.app.use('/api/total-vidrio', totalVidrioRoutes_1.default);
        this.app.use('/api/total-latas', totalLatasRoutes_1.default);
        this.app.use('/api/total-mujeres', totalMujeresRoutes_1.default);
        this.app.use('/api/total-hombres', totalHombresRoutes_1.default);
        this.app.use('/api/total-reg-noviembre', totalRegistroMesNoviembreRoutes_1.default);
        this.app.use('/api/total-reg-diciembre', totalRegistrosMesDiciembreRoutes_1.default);
        this.app.use('/api/total-reg-enero', totalRegistrosMesEneroRoutes_1.default);
    }
    //inicio el servidor con express
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server on ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
