import { ResultValor,Totalizacion,ListaJson, valoresOtros, ValoresTotalizadosOtros } from "../../models/controllesInterface";
import parcearlista from "./parciarLista";
export default async function parcearJson(resultValor: ResultValor[], cargo: string, distrito: string,dataVotos:valoresOtros): Promise<Totalizacion[]> {
  let totalizaciones: Totalizacion[] = [];
  resultValor.forEach((e) => {
    const totalizacion: Totalizacion = {
        cargo: cargo,
        distrito: distrito,
        nombreAgrupacion: e.nombreAgrupacion,
        sigla: "siglas",
        votos: e.votos,
        votosPorcentaje: e.votosPorcentaje
      };
      totalizaciones.push(totalizacion);
  });

  const valoresOtroslocal: ValoresTotalizadosOtros = await parcearlista(dataVotos,cargo,distrito);
  totalizaciones.push(valoresOtroslocal)
 return totalizaciones;
}