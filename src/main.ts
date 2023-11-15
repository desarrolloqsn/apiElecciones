// mainController.ts
import cron, { ScheduledTask } from 'node-cron';
import { fetchDataAndGenerateMaps } from './flowControllers';

let cronJob: ScheduledTask | null = null;

export function iniciarCiclo() {
    cronJob = cron.schedule('*/30 * * * * *', async () => {
        await fetchDataAndGenerateMaps();
    });
    console.log('Ciclo iniciado.');
}

export function detenerCiclo() {
    if (cronJob) {
        cronJob.stop();
        console.log('Ciclo detenido.');
    }
}
