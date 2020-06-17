"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rechazarSolicitudesController_1 = require("../controllers/rechazarSolicitudesController");
class RechazarSolicitudesRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.put('/:id', rechazarSolicitudesController_1.rechazarSolicitudesController.rechazarSolicitud);
    }
}
const rechazarSolicitudesRouter = new RechazarSolicitudesRouter();
exports.default = rechazarSolicitudesRouter.router;
