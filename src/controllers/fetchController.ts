import axios from 'axios';
import { ResultValor, Totalizacion,Resultado, jsonprincipal, valoresOtros, EstadoRecuento } from 'src/models/controllesInterface';
import parcearJson from './parcerControlles';
import {checkStatus, requestOptions} from '../utility/utils';


export async function fetchData(url: string, puesto: string, distrito: string): Promise<Totalizacion[]> {
  try {
    const response = await axios.get(url, requestOptions);
    const result: jsonprincipal = response.data;
    const data: ResultValor[] = result.valoresTotalizadosPositivos;
    const dataVotos: valoresOtros = result.valoresTotalizadosOtros;
    const recuentoMesas: EstadoRecuento = result.estadoRecuento;
    const totalizaciones: Totalizacion[] = await parcearJson(data, puesto, distrito, dataVotos);
    return totalizaciones;
  } catch ( error:any ) {
    console.log(error.message);
    throw error;
  }
}




