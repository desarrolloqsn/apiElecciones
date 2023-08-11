import { DataModel, total } from "src/models/controllesInterface";
import { callReview } from '../../utility/utils';

export async function actualizarTotalizacion(dataTotal: total): Promise < total > {
    const dataCompare: DataModel[] = callReview();
    const data = dataTotal.total.valoresTotalizados
   data.forEach((e)=>{
      try {
        const agrupacionCanal9 = dataCompare.find((item) => item["Dine Agrupacion"] === e.nombreAgrupacion) ;
        if (agrupacionCanal9) {
          e.sigla = agrupacionCanal9["Sigla"];
        }else{
          e.sigla = 'XXX'
        }
  
        e.listas?.forEach((lista) => {
          try {
            const candidato = dataCompare.find((item) => item["Dine Lista"] === lista.apellidoCandidato && item.PUESTO === e.cargo);
            if (candidato) {
              lista.apellidoCandidato = candidato.Candidato;
            }
          } catch (error) {
            console.error('Error updating candidate name:', error);
          }
        });
        
      } catch (error) {
        console.error('Error updating totalization data:', error);
      }
    })
    return dataTotal
}