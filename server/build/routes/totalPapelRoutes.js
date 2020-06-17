"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const totalPapelController_1 = require("../controllers/totalPapelController");
class TotalPapelRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', totalPapelController_1.totalPapelController.obtenerTotalPapel);
    }
}
const totalPapelRouter = new TotalPapelRouter();
exports.default = totalPapelRouter.router;
