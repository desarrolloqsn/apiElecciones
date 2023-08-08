import { Url } from 'src/models/configInterface';
import { fetchData } from './fetchController';
import { callUrls } from '../utility/utils';
import { jsonFinal, total } from 'src/models/controllesInterface';
//-----------------Aca hace el llamado al archivo donde guardo todas las url--------------------
//-------------y las dejo almacenadas en la promesa la cual luego hace el guardado ----------------------
//--Aca es donde deberia de hacer los cambio para manejar las caidas del server con status---------------------  
export async function fetchAllData(): Promise< total > {
  const URLs: Url[] = callUrls();
  const dataPromises = URLs.map(async (e) => {
    return fetchData(e.URL, e.PUESTO, e.DISTRITO);
  });
  const dataArray = await Promise.all(dataPromises);
  let data : total = { total: { valoresTotalizados:dataArray.flat() }}
  return data

}