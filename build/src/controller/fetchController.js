"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("../utility/utils");
const parcerControllers_1 = require("./parcerControllers");
async function fetchData(url, distrito, nivel) {
    try {
        const response = await axios_1.default.get(url, utils_1.requestOptions);
        const result = response.data;
        const data = result.estadoRecuento;
        const totalizacionMesas = await (0, parcerControllers_1.parceoMesas)(data, distrito, nivel);
        return totalizacionMesas;
    }
    catch (error) {
        console.log(error.message);
        throw error;
    }
}
exports.fetchData = fetchData;
//# sourceMappingURL=fetchController.js.map