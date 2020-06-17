"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const totalMujeresRegistradas_1 = require("../controllers/totalMujeresRegistradas");
class TotalMujeres {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', totalMujeresRegistradas_1.totalMujeresRegistradas.totalMuejeresRegistradas);
    }
}
const totalMujeres = new TotalMujeres();
exports.default = totalMujeres.router;
