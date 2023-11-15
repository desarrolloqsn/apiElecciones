import {  DataModelCaba, total } from "../../models/controllesInterface";
import { callReviewCaba } from '../../utility/utils';
export async function actualizarTotalizacion(dataTotal: total): Promise<total> {
  const dataCompare: DataModelCaba[] = callReviewCaba();
  const data = dataTotal.total.valoresTotalizados;

  data.forEach((e) => {
    try {
      const agrupacionCanal9 = dataCompare.find((item) => item["Dine Agrupacion"] === e.nombreAgrupacion) ;
      if (agrupacionCanal9) {
        e.sigla = agrupacionCanal9["Sigla"];
      }else{
        e.sigla = 'XXX'
      }
      e.listas?.forEach((lista) => {
        try {
          const candidato = dataCompare.find((item) => item["Dine Candidato"] === lista.apellidoCandidato);
          if (candidato) {
            lista.apellidoCandidato = candidato["Candidato Canal 9"];
          }
        } catch (error) {
          console.error('Error updating candidate name:', error);
        }
      });
    } catch (error) {
      console.error('Error updating totalization data:', error);
    }
  });

  return dataTotal;
}

