import { sumarElementosNumericos } from "../../utility/utils";
import { ResultValor,Totalizacion,ListaJson, valoresOtros, ValoresTotalizadosOtros } from "../../models/controllesInterface";
import parcearlista from "./parciarLista";
export default async function parcearJson(resultValor: ResultValor[], cargo: string, distrito: string,dataVotos:valoresOtros): Promise<Totalizacion[]> {
  let totalizaciones: Totalizacion[] = [];
  resultValor.forEach((e) => {
  const listasTotal:ListaJson[] = [];
    e.listas.forEach((i) => {
      listasTotal.push({
          apellidoCandidato:i.nombreLista,
          // votosLista: Math.floor(Math.random() * 999254) + 5
          votosLista: i.votos
      });
    });
    const datalista = sumarElementosNumericos(listasTotal)
    const totalizacion: Totalizacion = {
        cargo: cargo,
        distrito: distrito,
        nombreAgrupacion: e.nombreAgrupacion,
        sigla: "siglas",
        votos: datalista,
        listas: listasTotal,
      };
      totalizaciones.push(totalizacion);
  });

  const valoresOtroslocal: ValoresTotalizadosOtros = await parcearlista(dataVotos,cargo,distrito);
  totalizaciones.push(valoresOtroslocal)
 return totalizaciones;
}