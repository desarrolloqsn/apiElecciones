"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parceoMesas = void 0;
async function parceoMesas(data, distrito, nivel) {
    let totalizacionMesas = [];
    const totalizacion = {
        distrito: distrito,
        nivel: nivel,
        mesasEsperadas: data.mesasEsperadas,
        mesasTotalizadas: data.mesasTotalizadas
    };
    totalizacionMesas.push(totalizacion);
    return totalizacionMesas;
}
exports.parceoMesas = parceoMesas;
//# sourceMappingURL=parcerControllers.js.map