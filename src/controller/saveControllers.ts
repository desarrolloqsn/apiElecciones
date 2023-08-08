import { DataStore } from 'src/services/store';
import { fetchAllData } from './flowControllers';
export default async function fetchAndSaveDataMesasToStore(store:DataStore){
  const filename = "totalMesas.xml"; // proporciona el nombre del archivo que deseas usar
try {
    const dataPromise = await fetchAllData();
    store.saveLocal(dataPromise, filename);
    store.saveXml(dataPromise, filename);
    //store.saveStore(dataPromise)
  } catch (error) {
    
  }


}