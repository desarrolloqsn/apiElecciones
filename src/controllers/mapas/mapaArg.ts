import { Agrupacion, Mapas, ResultMapaARG } from "src/models/controllesInterface";
export async function organizarDatos(data: Agrupacion[]): Promise<Mapas> {
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
            MapaARG: {
                ResultadosMapa: resultados,
            },
        };
    } catch (error) {
        console.error('Error al organizar los datos:', error);
        throw error;
    }
}