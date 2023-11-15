
import {  organizarDatos } from './controllers/mapas/mapaArg';
import { fetchAllData as resultadoMAPAPBA}  from './controllers/mapas/resultadosParciales/flowController';
import { fetchAllData as resultadosMesas}  from './controllers/recuento_de_votos/flowControllers';
import { fetchAllData as resultadoElecciones } from './controllers/resultados/flowControllers';
import { DataStore } from './services/store';
import { organizarDatosPBA } from './controllers/mapas/maspaPBA';
export async function fetchDataAndGenerateMaps(): Promise<void> {
    try {
        const {dataEquivalente,winner} = await resultadoElecciones();
        // const rtoWinner = await resultadoMAPAPBA();
        const dataMesas = await resultadosMesas();
        const mapasArg = await organizarDatos(winner)
        // const mapasPBA = await organizarDatosPBA(rtoWinner)
        const store = new DataStore();
        await store.saveDataInParallel(dataMesas, dataEquivalente, mapasArg);
    } catch (error) {
        console.error('Error:', error);
    }
}


