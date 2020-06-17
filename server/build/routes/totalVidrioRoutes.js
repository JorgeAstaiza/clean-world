"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const totalVidrioController_1 = require("../controllers/totalVidrioController");
class TotalVidrioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', totalVidrioController_1.totalVidrioController.obtenerTotalVidrio);
    }
}
const totalVidrioRoutes = new TotalVidrioRoutes();
exports.default = totalVidrioRoutes.router;
