import axios from 'axios';
import {requestOptions} from '../utility/utils';
import { parceoMesas } from './parcerControllers';
import { EstadoRecuento, jsonprincipal, recuentoMesas } from 'src/models/controllesInterface';
export async function fetchData(url: string, distrito: string , nivel: string ): Promise<recuentoMesas[]> {
    try {
      const response = await axios.get(url, requestOptions);
      const result: jsonprincipal = response.data;
      const data: EstadoRecuento = result.estadoRecuento;
      const totalizacionMesas : recuentoMesas[] = await parceoMesas(data, distrito, nivel)
      return totalizacionMesas;
    } catch ( error:any ) {
      console.log(error.message);
      throw error;
    }
  }