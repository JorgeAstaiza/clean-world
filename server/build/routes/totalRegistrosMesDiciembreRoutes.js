"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const totalRegistrosMesDiciembre_1 = require("../controllers/totalRegistrosMesDiciembre");
class TotalRegistroMesDiciembre {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', totalRegistrosMesDiciembre_1.totalRegistrosMesDiciembre.totalRegistrosMesDiciembre);
    }
}
const totalRegistroMesDiciembre = new TotalRegistroMesDiciembre();
exports.default = totalRegistroMesDiciembre.router;
