"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const totalHombresRegistrados_1 = require("../controllers/totalHombresRegistrados");
class TotalHombres {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', totalHombresRegistrados_1.totalHombresRegistrados.totalHombresRegistrados);
    }
}
const totalHombres = new TotalHombres();
exports.default = totalHombres.router;
