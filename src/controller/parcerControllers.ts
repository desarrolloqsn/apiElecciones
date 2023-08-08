import { EstadoRecuento, recuentoMesas } from "src/models/controllesInterface";

export async function parceoMesas(data:EstadoRecuento, distrito:string, nivel:string):Promise< recuentoMesas[] > {
    let totalizacionMesas: recuentoMesas[] = [];
    const totalizacion: recuentoMesas = {
        distrito: distrito,
        nivel:nivel,
        mesasEsperadas:data.mesasEsperadas,
        mesasTotalizadas:data.mesasTotalizadas
      };
    totalizacionMesas.push(totalizacion);

    return totalizacionMesas
}