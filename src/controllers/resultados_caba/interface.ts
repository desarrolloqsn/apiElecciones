export interface Lista {
    id_candidatura: string;
    candidatos_principales: {
      JEF?: Candidato;
      LEG?: Candidato;
    };
  }
  
  export interface Candidato {
    descripcion: string;
  }
  
  export interface Resultado {
    id_candidatura: string;
    cant_votos: number;
    clase_candidatura: string;
    descripcion_candidatura: string;
  }
  export interface Lista {
    id_candidatura: string;
    candidatos_principales: {
      JEF?: Candidato;
      LEG?: Candidato;
    };
  }
  
  export interface Candidato {
    descripcion: string;
  }
  
  export interface Resultado {
    id_candidatura: string;
    cant_votos: number;
    clase_candidatura: string;
    descripcion_candidatura: string;
  }
  
 export  interface ResultadosData {
    cargo: 'JEF';
    resultados: {
      id_partido: string;
      listas: Array<any>; // Debes proporcionar el tipo correcto para "listas"
      nombreAgrupacion: string;
      sigla: string;
      votos: number;
    }[];
    hora_proceso: string;
    id_ubicacion: string;
    cant_votantes: number;
    id_publicacion: number;
    clase_ubicacion: string;
    cant_votos_negativos: number;
    cant_votos_positivos: number;
    cant_mesas_procesadas: number;
    descripcion_ubicacion: string;
    porcentaje_participacion: number;
    porcentaje_mesas_procesadas: number;
    actas: {
      porcentaje_publicadas: number;
      porcentaje_en_verificacion: number;
      porcentaje_en_definitivo: number;
      porcentaje_espera: number;
      porcentaje_ok: number;
      porcentaje_verificando: number;
      porcentaje_en_aprobacion: number;
      porcentaje_aprobando: number;
    };
  }
  