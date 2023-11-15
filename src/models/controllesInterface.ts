export interface recuentoMesas {
  distrito?:string,
  nivel?: number | string ,
  mesasEsperadas?: number,
  mesasTotalizadas?:number
  mesasTotalizadasPorcentaje?:string,
  }

export interface EstadoRecuento {
  mesasEsperadas: number;
  mesasTotalizadas: number;
  mesasTotalizadasPorcentaje: string;
  cantidadElectores: number;
  cantidadVotantes: number;
  participacionPorcentaje: number;
}

export interface Lista {
  apellidoCandidato?: "NULOS" |"EN BLANCO" |"IMPUGNADOS"|string;
  votosLista?: number|string;
}

export interface ResultValor {
  idAgrupacion: string;
  idAgrupacionTelegrama: string;
  nombreAgrupacion: string;
  votos: number;
  votosPorcentaje: number | string ;
  listas: Lista[];
}
export interface Valores {
  votosNulos: number;
  votosNulosPorcentaje: number;
  votosEnBlanco: number;
  votosEnBlancoPorcentaje: number;
  votosRecurridosComandoImpugnados: number;
  votosRecurridosComandoImpugnadosPorcentaje: number;
};
export interface jsonprincipal {
  fechaTotalizacion: string;
  estadoRecuento: EstadoRecuento;
  valoresTotalizadosPositivos: ResultValor[];
  valoresTotalizadosOtros: Valores 
}

export interface DataModel {
  "Dine Agrupacion": string;
  "Agrupacion Canal 9": string;
  "Dine Lista": string;
  "PUESTO": string;
  "Lista Canal 9": string;
  "Candidato": string;
  "Sigla": string;
  "DISTRITO":string;
}
export interface DataModelCaba {
  "Dine Agrupacion": string;
  "Agrupacion Canal 9": string;
  "Dine Lista": string;
  "PUESTO": string;
  "Lista Canal 9": string;
  "Dine Candidato": string;
  "Candidato Canal 9": string;
  "DISTRITO": string;
  "Sigla": string;
}
export interface Mapas {
  MapaARG: {
    ResultadosMapa: ResultMapaARG[];
  };
}
export interface MapasPBA {
  MapaPBA: {
    ResultadosMapa: ResultMapaARG[];
  };
}
export interface Ganadores{
  sigla?: string| null | undefined;
  votosPorcentaje?: number;
}

export interface Totalizacion {
  cargo?: string | null | undefined;
  distrito?: string| null;
  nombreAgrupacion?: string| null | undefined;
  sigla?: string| null | undefined;
  votos?: string | number ;
  votosPorcentaje?: number | string;
  listas?: ListaJson[];
}

export interface CompareModel  {
  ID: string | null;
  PUESTO: string;
  DISTRITO: string;
  URL: string;
  NIVEL: string;
};

export interface ResultMapaARG {
  ID: string | null;
  Distrito: string;
  Ganador: string;
}


export interface ValoresTotalizadosOtros{
  cargo?: string | null | undefined;
  distrito?: string| null;
  nombreAgrupacion?: string| 'VOTOS NEGATIVOS';
  sigla?: string| null | undefined;
  votos?: string | number ;
  listas?:ListaJson[]
}
export interface totalMesas{
  total:{
    recuentoMesas:recuentoMesas[]
  }
}
export interface Agrupacion {
  Id?: string;
  Distrito?: string;
  nombreAgrupacion: string;
  sigla: string;
  votos: number;
  votosPorcentaje: number;
}
export interface FetchAllDataResult {
  dataEquivalente: total;
  winner: Agrupacion[];
}
export interface total{
  total:{
    valoresTotalizados:Totalizacion[]
  }
}
export interface Url{
  PUESTO: string;
  DISTRITO: string;
  URL: string;
  NIVEL:string ;
}
export interface jsonFinal {
  Valorestotalizados: {
    totalizacion: Totalizacion;
    valoresOtros: ValoresTotalizadosOtros;
  };
}
export interface resultadoPromise {

}

export enum Enum {
  NULOS = 'NULOS',
  EN_BLANCO = 'EN BLANCO',
  IMPUGNADOS = 'IMPUGNADOS',
}
export interface valoresOtros{
  votosNulos: number;
  votosNulosPorcentaje: number;
  votosEnBlanco: number;
  votosEnBlancoPorcentaje: number;
  votosRecurridosComandoImpugnados: number;
  votosRecurridosComandoImpugnadosPorcentaje: number;
};
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
export interface Lista {
  idLista?: string;
  nombreLista: string;
  votos: number|string;
  votosPorcentaje?: number;
}


  
  export interface ResultValor {
    idAgrupacion: string;
    idAgrupacionTelegrama: string;
    nombreAgrupacion: string;
    votos: number;
    votosPorcentaje: number | string;
    listas: Lista[];
  }
  
  
  export interface Totalizacion {
    cargo?: string | null | undefined;
    distrito?: string| null;
    nombreAgrupacion?: string| null | undefined;
    sigla?: string| null | undefined;
    votos?: string | number 
    listas?:ListaJson[];

  }
  export interface ListaJson {
    apellidoCandidato: string;
    votosLista: number|string;
  }
  
  export interface Resultado {
    jsonParceado: Totalizacion[];
    status: number;
}
  
  
  