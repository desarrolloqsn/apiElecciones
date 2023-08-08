"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parciarLista_1 = __importDefault(require("./parciarLista"));
async function parcearJson(resultValor, cargo, distrito, dataVotos) {
    let totalizaciones = [];
    //  console.log(JSON.stringify(resultValor))
    resultValor.forEach((e) => {
        const listasTotal = [];
        e.listas.forEach((i) => {
            listasTotal.push({
                apellidoCandidato: i.nombreLista,
                votosLista: i.votos
            });
        });
        const totalizacion = {
            cargo: cargo,
            distrito: distrito,
            nombreAgrupacion: e.nombreAgrupacion,
            sigla: "siglas",
            votos: e.votos,
            listas: listasTotal,
        };
        totalizaciones.push(totalizacion);
    });
    const valoresOtroslocal = await (0, parciarLista_1.default)(dataVotos, cargo, distrito);
    totalizaciones.push(valoresOtroslocal);
    return totalizaciones;
}
exports.default = parcearJson;
// Ejemplo de uso:
//const data: ResultValor[] = resultValor;
//   parcearJson(data,PUESTO,DISTRITO).then((totalizaciones) => {
//     console.log(totalizaciones);
//   }).catch(err =>{
//     console.error(err)
//   })
// json de ejemplo 
// const resul = {
//     "fechaTotalizacion": "Jul 28, 2023, 9:46:57 AM",
//     "estadoRecuento": {
//         "mesasEsperadas": 104529,
//         "mesasTotalizadas": 0,
//         "mesasTotalizadasPorcentaje": 0.0,
//         "cantidadElectores": 0,
//         "cantidadVotantes": 0,
//         "participacionPorcentaje": 0.0
//     },
//     "valoresTotalizadosPositivos": [
//         {
//             "idAgrupacion": "13",
//             "idAgrupacionTelegrama": "13",
//             "nombreAgrupacion": "AGRUPACION - 0013",
//             "votos": 0,
//             "votosPorcentaje": 0.0,
//             "listas": [
//                 {
//                     "idLista": "3017",
//                     "nombreLista": "LISTA - 3017",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 }
//             ]
//         },
//         {
//             "idAgrupacion": "20",
//             "idAgrupacionTelegrama": "20",
//             "nombreAgrupacion": "AGRUPACION - 0020",
//             "votos": 0,
//             "votosPorcentaje": 0.0,
//             "listas": [
//                 {
//                     "idLista": "3018",
//                     "nombreLista": "LISTA - 3018",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 }
//             ]
//         },
//         {
//             "idAgrupacion": "40",
//             "idAgrupacionTelegrama": "40",
//             "nombreAgrupacion": "AGRUPACION - 0040",
//             "votos": 0,
//             "votosPorcentaje": 0.0,
//             "listas": [
//                 {
//                     "idLista": "3019",
//                     "nombreLista": "LISTA - 3019",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 }
//             ]
//         },
//         {
//             "idAgrupacion": "57",
//             "idAgrupacionTelegrama": "57",
//             "nombreAgrupacion": "AGRUPACION - 0057",
//             "votos": 0,
//             "votosPorcentaje": 0.0,
//             "listas": [
//                 {
//                     "idLista": "3025",
//                     "nombreLista": "LISTA - 3025",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 }
//             ]
//         },
//         {
//             "idAgrupacion": "90",
//             "idAgrupacionTelegrama": "90",
//             "nombreAgrupacion": "AGRUPACION - 0090",
//             "votos": 0,
//             "votosPorcentaje": 0.0,
//             "listas": [
//                 {
//                     "idLista": "3026",
//                     "nombreLista": "LISTA - 3026",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 },
//                 {
//                     "idLista": "3027",
//                     "nombreLista": "LISTA - 3027",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 }
//             ]
//         },
//         {
//             "idAgrupacion": "92",
//             "idAgrupacionTelegrama": "92",
//             "nombreAgrupacion": "AGRUPACION - 0092",
//             "votos": 0,
//             "votosPorcentaje": 0.0,
//             "listas": [
//                 {
//                     "idLista": "3020",
//                     "nombreLista": "LISTA - 3020",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 }
//             ]
//         },
//         {
//             "idAgrupacion": "94",
//             "idAgrupacionTelegrama": "94",
//             "nombreAgrupacion": "AGRUPACION - 0094",
//             "votos": 0,
//             "votosPorcentaje": 0.0,
//             "listas": [
//                 {
//                     "idLista": "3022",
//                     "nombreLista": "LISTA - 3022",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 },
//                 {
//                     "idLista": "3023",
//                     "nombreLista": "LISTA - 3023",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 },
//                 {
//                     "idLista": "3024",
//                     "nombreLista": "LISTA - 3024",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 }
//             ]
//         },
//         {
//             "idAgrupacion": "95",
//             "idAgrupacionTelegrama": "95",
//             "nombreAgrupacion": "AGRUPACION - 0095",
//             "votos": 0,
//             "votosPorcentaje": 0.0,
//             "listas": [
//                 {
//                     "idLista": "3021",
//                     "nombreLista": "LISTA - 3021",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 }
//             ]
//         },
//         {
//             "idAgrupacion": "131",
//             "idAgrupacionTelegrama": "131",
//             "nombreAgrupacion": "AGRUPACION - 0131",
//             "votos": 0,
//             "votosPorcentaje": 0.0,
//             "listas": [
//                 {
//                     "idLista": "3002",
//                     "nombreLista": "LISTA - 3002",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 },
//                 {
//                     "idLista": "3003",
//                     "nombreLista": "LISTA - 3003",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 },
//                 {
//                     "idLista": "3004",
//                     "nombreLista": "LISTA - 3004",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 }
//             ]
//         },
//         {
//             "idAgrupacion": "132",
//             "idAgrupacionTelegrama": "132",
//             "nombreAgrupacion": "AGRUPACION - 0132",
//             "votos": 0,
//             "votosPorcentaje": 0.0,
//             "listas": [
//                 {
//                     "idLista": "3007",
//                     "nombreLista": "LISTA - 3007",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 },
//                 {
//                     "idLista": "3008",
//                     "nombreLista": "LISTA - 3008",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 }
//             ]
//         },
//         {
//             "idAgrupacion": "133",
//             "idAgrupacionTelegrama": "133",
//             "nombreAgrupacion": "AGRUPACION - 0133",
//             "votos": 0,
//             "votosPorcentaje": 0.0,
//             "listas": [
//                 {
//                     "idLista": "3001",
//                     "nombreLista": "LISTA - 3001",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 }
//             ]
//         },
//         {
//             "idAgrupacion": "134",
//             "idAgrupacionTelegrama": "134",
//             "nombreAgrupacion": "AGRUPACION - 0134",
//             "votos": 0,
//             "votosPorcentaje": 0.0,
//             "listas": [
//                 {
//                     "idLista": "3005",
//                     "nombreLista": "LISTA - 3005",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 },
//                 {
//                     "idLista": "3006",
//                     "nombreLista": "LISTA - 3006",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 }
//             ]
//         },
//         {
//             "idAgrupacion": "135",
//             "idAgrupacionTelegrama": "135",
//             "nombreAgrupacion": "AGRUPACION - 0135",
//             "votos": 0,
//             "votosPorcentaje": 0.0,
//             "listas": [
//                 {
//                     "idLista": "3016",
//                     "nombreLista": "LISTA - 3016",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 }
//             ]
//         },
//         {
//             "idAgrupacion": "136",
//             "idAgrupacionTelegrama": "136",
//             "nombreAgrupacion": "AGRUPACION - 0136",
//             "votos": 0,
//             "votosPorcentaje": 0.0,
//             "listas": [
//                 {
//                     "idLista": "3009",
//                     "nombreLista": "LISTA - 3009",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 },
//                 {
//                     "idLista": "3010",
//                     "nombreLista": "LISTA - 3010",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 }
//             ]
//         },
//         {
//             "idAgrupacion": "137",
//             "idAgrupacionTelegrama": "137",
//             "nombreAgrupacion": "AGRUPACION - 0137",
//             "votos": 0,
//             "votosPorcentaje": 0.0,
//             "listas": [
//                 {
//                     "idLista": "3011",
//                     "nombreLista": "LISTA - 3011",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 },
//                 {
//                     "idLista": "3012",
//                     "nombreLista": "LISTA - 3012",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 },
//                 {
//                     "idLista": "3013",
//                     "nombreLista": "LISTA - 3013",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 },
//                 {
//                     "idLista": "3014",
//                     "nombreLista": "LISTA - 3014",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 },
//                 {
//                     "idLista": "3015",
//                     "nombreLista": "LISTA - 3015",
//                     "votos": 0,
//                     "votosPorcentaje": 0.0
//                 }
//             ]
//         }
//     ],
//     "valoresTotalizadosOtros": {
//         "votosNulos": 0,
//         "votosNulosPorcentaje": 0.0,
//         "votosEnBlanco": 0,
//         "votosEnBlancoPorcentaje": 0.0,
//         "votosRecurridosComandoImpugnados": 0,
//         "votosRecurridosComandoImpugnadosPorcentaje": 0.0
//     }
// }
// const PUESTO = 'PRESIDENTE';
// const DISTRITO = 'NACIONAL';
// const resultValor = Object.values(resul.valoresTotalizadosPositivos);
//# sourceMappingURL=parcerControlles.js.map