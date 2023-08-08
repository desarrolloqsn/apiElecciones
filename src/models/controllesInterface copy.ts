export interface jsonprincipal {
  fechaTotalizacion: string;
  estadoRecuento: EstadoRecuento;
  valoresTotalizadosPositivos: ResultValor[];
  valoresTotalizadosOtros: {
    votosNulos: number;
    votosNulosPorcentaje: number;
    votosEnBlanco: number;
    votosEnBlancoPorcentaje: number;
    votosRecurridosComandoImpugnados: number;
    votosRecurridosComandoImpugnadosPorcentaje: number;
  };
}
export interface jsonFinal{
  valoresTotalizados:{
    valoresTotalizadosPositivos:ResultValor[],
    valoresTotalizadosOtros:{
      cargo:string,
      distrito:string,
      nombreAgrupacion:string|'Votos Negativos',
      sigla:string,
      votos:number
      listas:{
        apellidoCandidato:Enum
        votosLista: number
      }
    }
  }
}
export enum Enum {
  NULOS = 'NULOS',
  EN_BLANCO = 'EN BLANCO',
  IMPUGNADOS = 'IMPUGNADOS',
}
export interface EstadoRecuento {
    mesasEsperadas: number;
    mesasTotalizadas: number;
    mesasTotalizadasPorcentaje: number;
    cantidadElectores: number;
    cantidadVotantes: number;
    participacionPorcentaje: number;
  }
  
  export interface ResultValor {
    idAgrupacion: string;
    idAgrupacionTelegrama: string;
    nombreAgrupacion: string;
    votos: number;
    votosPorcentaje: number;
    listas: ListaJson[];
  }
  
  export interface Totalizacion {
    cargo: string;
    distrito: string;
    nombreAgrupacion: string;
    sigla: string;
    votos: number;
    listas: ListaJson[];
  }
  export interface ListaJson {
    nombreLista: string;
    votos: number|string;
  }
  
export interface Resultado {
    jsonParceado: Totalizacion[];
    status: number;
}
  
  
  