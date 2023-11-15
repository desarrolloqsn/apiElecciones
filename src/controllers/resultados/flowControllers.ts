import { Url } from 'src/models/configInterface';
import { fetchData } from './fetchController';
import { callUrls } from '../../utility/utils';
import { total, Agrupacion, FetchAllDataResult } from 'src/models/controllesInterface';
import { actualizarGanadores, actualizarTotalizacion } from './equivalenceController';

export async function fetchAllData(): Promise<FetchAllDataResult> {
    const URLs: Url[] = callUrls();
    let arrayWinner: Agrupacion[] = [];
    try {
        const dataPromises = URLs.map(async (e) => {
            const data = await fetchData(e.URL, e.PUESTO, e.DISTRITO);
            const filteredData = data.filter(item => item.sigla !== 'NEG');
            const maxObj: Agrupacion = filteredData.reduce((prev: any, current: any) => {
                return (prev.votosPorcentaje > current.votosPorcentaje) ? prev : current;
            }, {});

            if (maxObj !== null && e.ID != null ) {
                arrayWinner.push({
                    Id: e.ID,
                    Distrito: e.DISTRITO,
                    nombreAgrupacion: maxObj.nombreAgrupacion,
                    sigla: maxObj.sigla,
                    votos: maxObj.votos,
                    votosPorcentaje: maxObj.votosPorcentaje
                });
            }
            return data;
        });
        const dataArray = await Promise.all(dataPromises.map(p => p.catch(e => e)));
        const filteredDataArray = dataArray.filter((item) => item !== null);
        const winner = await actualizarGanadores(arrayWinner);
        const data: total = { total: { valoresTotalizados: filteredDataArray.flat() }};
        const dataEquivalente = await actualizarTotalizacion(data);

        // Retorna un objeto con ambos resultados
        return {
            dataEquivalente,
            winner
        };
    } catch (error) {
        console.error('Error al procesar los datos:', error);
        throw error;
    }
}
