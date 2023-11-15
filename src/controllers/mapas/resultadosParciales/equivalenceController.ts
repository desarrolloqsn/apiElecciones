import { Agrupacion, DataModel, total } from "src/models/controllesInterface";
import { callReview } from '../../../utility/utils';

export async function actualizarTotalizacion(dataTotal: total): Promise < total > {
    const dataCompare: DataModel[] = callReview();
    const data = dataTotal.total.valoresTotalizados
   data.forEach((e)=>{
      try {
        const agrupacionCanal9 = dataCompare.find((item) => item["Dine Agrupacion"] === e.nombreAgrupacion) ;
        if (agrupacionCanal9) {
          e.nombreAgrupacion = agrupacionCanal9['Agrupacion Canal 9']
          e.sigla = agrupacionCanal9["Sigla"];
        }else{
          e.sigla = 'XXX'
        }
      } catch (error) {
        console.error('Error updating totalization data:', error);
      }
    })
    return dataTotal
}
export async function actualizarGanadores(dataTotal: Agrupacion[]): Promise < Agrupacion[] > {
    const dataCompare: DataModel[] = callReview();
    const data = dataTotal
   data.forEach((e)=>{
      try {
        const agrupacionCanal9 = dataCompare.find((item) => item["Dine Agrupacion"] === e.nombreAgrupacion) ;
        if (agrupacionCanal9) {
          e.nombreAgrupacion = agrupacionCanal9['Agrupacion Canal 9']
          e.sigla = agrupacionCanal9["Sigla"];
        }else{
          e.sigla = 'XXX'
        }
      } catch (error) {
        console.error('Error updating totalization data:', error);
      }
    })
    return dataTotal
}