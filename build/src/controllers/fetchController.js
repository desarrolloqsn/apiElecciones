"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = void 0;
const axios_1 = __importDefault(require("axios"));
const parcerControlles_1 = __importDefault(require("./parcerControlles"));
const utils_1 = require("../utility/utils");
async function fetchData(url, puesto, distrito) {
    try {
        const response = await axios_1.default.get(url, utils_1.requestOptions);
        const result = response.data;
        const data = result.valoresTotalizadosPositivos;
        const dataVotos = result.valoresTotalizadosOtros;
        const recuentoMesas = result.estadoRecuento;
        const totalizaciones = await (0, parcerControlles_1.default)(data, puesto, distrito, dataVotos);
        return totalizaciones;
    }
    catch (error) {
        console.log(error.message);
        throw error;
    }
}
exports.fetchData = fetchData;
//# sourceMappingURL=fetchController.js.map