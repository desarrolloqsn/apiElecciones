import { EstadoRecuento, recuentoMesas } from "src/models/controllesInterface";

export async function parceoMesas(data:EstadoRecuento, distrito:string, nivel:string):Promise< recuentoMesas[] > {
    let totalizacionMesas: recuentoMesas[] = [];
    const totalizacion: recuentoMesas = {
        distrito: distrito,
        nivel:nivel,
        mesasEsperadas: data.mesasEsperadas ,
        mesasTotalizadas:data.mesasTotalizadas,
        mesasTotalizadasPorcentaje:data.mesasTotalizadasPorcentaje,
        // mesasTotalizadas: Math.floor(Math.random() * 200) + 5,
        // mesasTotalizadasPorcentaje: JSON.stringify( Math.floor(Math.random() * (75 - 5) + 5))
      };
    totalizacionMesas.push(totalizacion);

    return totalizacionMesas
}