import { Agrupacion, Mapas, MapasPBA, ResultMapaARG } from "src/models/controllesInterface";
export async function organizarDatosPBA(data: Agrupacion[]): Promise<MapasPBA> {
    try {
        data.sort((a, b) => (a.Id && b.Id ? parseInt(a.Id) - parseInt(b.Id) : 0));
        const resultados: ResultMapaARG[] = [];
        for (const agrupacion of data) {
            if (agrupacion.Id && agrupacion.Distrito) {
                resultados.push({
                    ID: agrupacion.Id,
                    Distrito: agrupacion.Distrito,
                    Ganador: agrupacion.sigla,
                });
            }
        }
        return {
            MapaPBA: {
                ResultadosMapa: resultados,
            },
        };
    } catch (error) {
        console.error('Error al organizar los datos:', error);
        throw error;
    }
}