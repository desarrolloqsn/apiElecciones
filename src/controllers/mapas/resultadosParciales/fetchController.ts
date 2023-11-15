import axios from 'axios';
import { ResultValor, Totalizacion, jsonprincipal, valoresOtros } from 'src/models/controllesInterface';
import parcearJson from './parcesController';
import { requestOptions} from '../../../utility/utils';


export async function fetchData(url: string): Promise<Totalizacion[]> {
  try {
    const response = await axios.get(url, requestOptions);
    const result: jsonprincipal = response.data;
    const data: ResultValor[] = result.valoresTotalizadosPositivos;
    const totalizaciones: Totalizacion[] = await parcearJson(data);
    return totalizaciones;
  } catch ( error:any ) {
    console.log(error.message);
    throw error;
  }
}




