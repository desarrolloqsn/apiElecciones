import { ResultValor,Totalizacion} from "../../../models/controllesInterface";
export default async function parcearJson(resultValor: ResultValor[]): Promise<Totalizacion[]> {
  let totalizaciones: Totalizacion[] = [];
  resultValor.forEach((e) => {
    const totalizacion: Totalizacion = {
        nombreAgrupacion: e.nombreAgrupacion,
        sigla: "siglas",
        votos: e.votos,
        votosPorcentaje: e.votosPorcentaje
        // votos:  Math.floor(Math.random() * 200) + 5,
        // votosPorcentaje: JSON.stringify( Math.floor(Math.random() * (75 - 5) + 5))        
      };
      totalizaciones.push(totalizacion);
  });

 return totalizaciones;
}