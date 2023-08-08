"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function parcearlista(data, puesto, distrito) {
    let lista = [];
    lista.push({
        apellidoCandidato: 'EN BLANCO',
        votosLista: data.votosEnBlanco
    });
    lista.push({
        apellidoCandidato: 'NULOS',
        votosLista: data.votosNulos,
    });
    lista.push({
        apellidoCandidato: 'IMPUGNADOS',
        votosLista: data.votosRecurridosComandoImpugnados,
    });
    function sumarElementosNumericos(arr) {
        return arr.reduce((acumulador, elemento) => {
            if (typeof elemento.votosLista === "number") {
                return acumulador + elemento.votosLista;
            }
            return acumulador;
        }, 0);
    }
    const resultVotos = sumarElementosNumericos(lista);
    const valoresOtrosLocal = {
        cargo: puesto,
        distrito: distrito,
        nombreAgrupacion: 'VOTOS NEGATIVOS',
        sigla: 'siglas',
        votos: resultVotos,
        listas: lista
    };
    return valoresOtrosLocal;
}
exports.default = parcearlista;
//# sourceMappingURL=parciarLista.js.map