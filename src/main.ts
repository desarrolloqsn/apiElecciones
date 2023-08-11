import { fetchAllData as resultadosMesas}  from './controllers/recuento_de_votos/flowControllers';
import { fetchAllData as resultadoElecciones } from './controllers/resultados/flowControllers';

import { DataStore } from './services/store'; 
import cron,{ScheduledTask} from 'node-cron'
let cronJob: ScheduledTask  | null = null; 
// Función para iniciar el ciclo
export  function iniciarCiclo() {
  cronJob = cron.schedule('*/30 * * * * *', async () => {
    await ejecutarEnParalelo();
  });
  console.log('Ciclo iniciado.');
}

// Función para detener el ciclo
export  function detenerCiclo() {
  if (cronJob) {
    cronJob.stop();
    console.log('Ciclo detenido.');
  }
}

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