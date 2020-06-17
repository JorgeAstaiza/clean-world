"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const totalPlasticoController_1 = require("../controllers/totalPlasticoController");
class TotalPlasticoRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', totalPlasticoController_1.totalPlasticoController.obtenerTotalPlastico);
    }
}
const totalPlasticoRouter = new TotalPlasticoRouter();
exports.default = totalPlasticoRouter.router;
