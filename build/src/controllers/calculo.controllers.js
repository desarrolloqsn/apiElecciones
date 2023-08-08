"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function calculo(paramt1, paramt2) {
    const valoresOtrosLocal = {
        cargo: paramt1.cargo || '',
        distrito: paramt1.distrito || '',
        nombreAgrupacion: 'VOTOS NEGATIVOS',
        sigla: paramt1.sigla || '',
        votos: paramt2.votos,
        listas: paramt2.listas
    };
    // Crear objeto final con los valores totalizados
    const json = {
        Valorestotalizados: {
            totalizacion: paramt1,
            valoresOtros: valoresOtrosLocal,
        }
    };
    return json;
}
exports.default = calculo;
//# sourceMappingURL=calculo.controllers.js.map