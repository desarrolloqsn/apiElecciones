import { DataStore } from 'src/services/store';
import { fetchAllData } from './flowControllers';
export default async function fetchAndSaveDataMesasToStore(store:DataStore){
try {
    const dataPromise = await fetchAllData();
    store.saveLocal(dataPromise)
    store.saveXml(dataPromise)
    //store.saveStore(dataPromise)
  } catch (error) {
    
  }


}