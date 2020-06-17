"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const totalLatasController_1 = require("../controllers/totalLatasController");
class TotalLatasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', totalLatasController_1.totalLatasController.obtenerTotalLatas);
    }
}
const totalLatasRoutes = new TotalLatasRoutes();
exports.default = totalLatasRoutes.router;
