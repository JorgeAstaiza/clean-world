"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mensajeRechazadoController_1 = require("../controllers/mensajeRechazadoController");
class MensajeRechazadoRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.put('/:id', mensajeRechazadoController_1.mensajeRechazadoController.mensajeRechazar);
    }
}
const mensajeRechazadoRouter = new MensajeRechazadoRouter();
exports.default = mensajeRechazadoRouter.router;
