"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const totalCartonController_1 = require("../controllers/totalCartonController");
class TotalCartonRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', totalCartonController_1.totalCartonController.obtenerTotalCarton);
    }
}
const totalCartonRouter = new TotalCartonRouter();
exports.default = totalCartonRouter.router;
