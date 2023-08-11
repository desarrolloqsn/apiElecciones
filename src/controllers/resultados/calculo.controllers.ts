import {  Totalizacion, ValoresTotalizadosOtros, jsonFinal } from "../models/controllesInterface";

export default async function calculo(paramt1: Totalizacion, paramt2: ValoresTotalizadosOtros): Promise<jsonFinal> {
  
  const valoresOtrosLocal: ValoresTotalizadosOtros = {
    cargo: paramt1.cargo || '', 
    distrito: paramt1.distrito || '', 
    nombreAgrupacion: 'VOTOS NEGATIVOS',
    sigla: paramt1.sigla || '', 
    votos: paramt2.votos,
    listas: paramt2.listas
  };

  // Crear objeto final con los valores totalizados
  const json: jsonFinal = {
    Valorestotalizados: {
      totalizacion:paramt1,
      valoresOtros:valoresOtrosLocal,
    }
  };return json;
}
