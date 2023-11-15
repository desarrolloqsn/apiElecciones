import { Url, total } from '../../models/controllesInterface';
import {fetchData} from './fetchControllers'
import { callUrlsCaba } from '../../utility/utils';
import { actualizarTotalizacion } from './equivalenciaControllers';
import axios from 'axios';

 //const urlMeta = 'https://testing-prensa.caba.datosoficiales.com/metadata/CABA/meta.json'
const urlMeta ='https://prensa-api.caba.datosoficiales.com/metadata/CABA/meta.json'

export async function fetchAllData(): Promise< total > {
    const URLs: Url[] = callUrlsCaba();
    const meta = await axios.get(urlMeta)
    const dataPromises = URLs.map(async (e) => {
      return fetchData(e.URL, e.PUESTO, e.DISTRITO,meta.data);
    });
    const dataArray = await Promise.all(dataPromises);
    let data : total = { total: { valoresTotalizados:dataArray.flat() }}
    const dataEquivalente = actualizarTotalizacion(data)
    return dataEquivalente
    
  }