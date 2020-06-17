"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const totalRegistrosMesEnero_1 = require("../controllers/totalRegistrosMesEnero");
class TotalRegistroMesEnero {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', totalRegistrosMesEnero_1.totalRegistrosMesEnero.totalRegistrosMesEnero);
    }
}
const totalRegistroMesEnero = new TotalRegistroMesEnero();
exports.default = totalRegistroMesEnero.router;
