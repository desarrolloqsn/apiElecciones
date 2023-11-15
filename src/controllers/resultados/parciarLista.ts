import { sumarElementosNumericos } from "../../utility/utils";
import { ListaJson, ValoresTotalizadosOtros, valoresOtros } from "../../models/controllesInterface";

export default async function parcearlista(data:valoresOtros,puesto:string,distrito:string):Promise<ValoresTotalizadosOtros>{
 
   let lista:ListaJson[] = []
    lista.push({
      apellidoCandidato:'EN BLANCO',
      votosLista:data.votosEnBlanco
    })
    const resultVotos = sumarElementosNumericos(lista) 
    const valoresOtrosLocal: ValoresTotalizadosOtros = {
        cargo: puesto,
        distrito: distrito,
        nombreAgrupacion: 'VOTOS NEGATIVOS',
        sigla: 'NEG',
        votos: resultVotos,
      };
      return valoresOtrosLocal
}