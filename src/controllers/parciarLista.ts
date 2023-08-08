import { ListaJson, ValoresTotalizadosOtros, valoresOtros } from "../models/controllesInterface";

export default async function parcearlista(data:valoresOtros,puesto:string,distrito:string):Promise<ValoresTotalizadosOtros>{
 
   let lista:ListaJson[] = []
    lista.push({
      apellidoCandidato:'EN BLANCO',
      votosLista:data.votosEnBlanco
    })
    lista.push({
      apellidoCandidato: 'NULOS',
      votosLista: data.votosNulos, 
    })
    lista.push({
      apellidoCandidato: 'IMPUGNADOS',
      votosLista: data.votosRecurridosComandoImpugnados,
    })
    function sumarElementosNumericos(arr: ListaJson[]): number {
        return arr.reduce((acumulador, elemento) => {
          if (typeof elemento.votosLista === "number") {
            return acumulador + elemento.votosLista;
          }
          return acumulador;
        }, 0);
      }
    const resultVotos = sumarElementosNumericos(lista) 
    const valoresOtrosLocal: ValoresTotalizadosOtros = {
        cargo: puesto,
        distrito: distrito,
        nombreAgrupacion: 'VOTOS NEGATIVOS',
        sigla: 'siglas',
        votos: resultVotos,
        listas:lista
      };
      return valoresOtrosLocal
}