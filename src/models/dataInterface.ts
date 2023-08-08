export interface DataInterface {
    idAgrupacion: string;
    nombreAgrupacion: string;
    votos: number;
    votosPorcentaje: number;
    idAgrupacionTelegrama: string;
    urlLogo: string;
    listas: {
        nombre: string;
        numero: string;
        votos: number;
    }[];
}