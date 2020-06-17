"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const totalRegistrosMesNoviembre_1 = require("../controllers/totalRegistrosMesNoviembre");
class TotalRegistroMesNoviembre {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', totalRegistrosMesNoviembre_1.totalRegistrosMesNoviembre.totalRegistrosMesNoviembre);
    }
}
const totalRegistroMesNoviembre = new TotalRegistroMesNoviembre();
exports.default = totalRegistroMesNoviembre.router;
