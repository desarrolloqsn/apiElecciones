import { fetchAllData as resultadosMesas}  from './controller/flowControllers';
import { fetchAllData as resultadoElecciones } from './controllers/flowControllers';
import fetchAndSaveDataMesasToStore from './controller/saveControllers';
import { DataStore } from './services/store'; 
export default async function ejecutarEnParalelo() {
  try {
    console.time('fetchAllData');

    const store = new DataStore();

    const dataMesas = await resultadosMesas(); 
    const dataElec = await resultadoElecciones();

    await store.saveDataInParallel(dataMesas, dataElec);
    console.timeEnd('fetchAllData');
  } catch (error) {
    console.error('Error:', error);
  }
}