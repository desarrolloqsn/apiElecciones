import { UrlPBA } from 'src/models/configInterface';
import { fetchData } from './fetchController';
import { callUrlsPBA } from '../../../utility/utils';
import { Agrupacion, FetchAllDataResult, total } from 'src/models/controllesInterface';
import { actualizarGanadores, actualizarTotalizacion } from './equivalenceController';

export async function fetchAllData(): Promise<Agrupacion[]> {
    const URLs: UrlPBA[] = callUrlsPBA();
    let arrayWinner: Agrupacion[] = [];

    try {
        const dataPromises = URLs.map(async (e) => {
            if (e.ID !== null) {
                const data = await fetchData(e.URL);
                const maxObj: Agrupacion = data.reduce((prev: any, current: any) => {
                    return (prev.votosPorcentaje > current.votosPorcentaje) ? prev : current;
                }, {});
                if (maxObj !== null && e.ID != null) {
                    arrayWinner.push({
                        Id: e.ID,
                        Distrito: e['DISTRITO CANAL'],
                        nombreAgrupacion: maxObj.nombreAgrupacion,
                        sigla: maxObj.sigla,
                        votos: maxObj.votos,
                        votosPorcentaje: maxObj.votosPorcentaje
                    });
                }
                return data;
            }
            return null;
        });
        await Promise.all(dataPromises.map(p => p.catch(e => e)));
        const winner:Agrupacion[] = await actualizarGanadores(arrayWinner);
        return winner
    } catch (error) {
        console.error('Error al procesar los datos:', error);
        throw error;
    }
}
