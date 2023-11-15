import { sumarElementosNumericos } from "../../utility/utils";
import { ListaJson, Totalizacion } from "../../models/controllesInterface";
import { ResultadosData } from "./interface";

export async function reestructurarDatos(dataJson: ResultadosData , distrito: string, cargo: string): Promise<Totalizacion[]> {
  try {
    const data: ResultadosData = dataJson;
    const resultadosUnicos: { [id_partido: string]: any } = {};
    const resultadosEspeciales: any[] = [];

    for (const resultado of data['resultados']) {
      const idPartido = resultado['id_partido'];
      if (!resultadosUnicos[idPartido]) {
        resultadosUnicos[idPartido] = resultado;
      }

      if ([ 'BLC'].includes(resultado['id_partido'])) {
        resultadosEspeciales.push(resultado);
      }
    }

    // Filtrar resultados especiales del arreglo original
    data['resultados'] = data['resultados'].filter(resultado =>
      !['REC', 'IMP', 'BLC', 'NUL'].includes(resultado['id_partido'])
    );

    const totalizaciones: Totalizacion[] = [];

    // Procesar resultados regulares
    for (const idPartido in resultadosUnicos) {
      const resultadoUnico = resultadosUnicos[idPartido];

      // Validar la existencia de la propiedad nombreAgrupacion
      if (!resultadoUnico['nombreAgrupacion']) {
        continue;
      }

      const listasTotal: ListaJson[] = [];

      resultadoUnico['listas'].forEach((lista: any) => {
        listasTotal.push({
          apellidoCandidato: lista['descripcion'],
          votosLista: lista['cant_votos']
        });
      });

      const totalizacion: Totalizacion = {
        cargo: cargo,
        distrito: distrito,
        nombreAgrupacion: resultadoUnico['nombreAgrupacion'],
        sigla: resultadoUnico['sigla'],
        votos: resultadoUnico['votos'],
        listas: listasTotal,
      };
      totalizaciones.push(totalizacion);
    }

    // Procesar resultados especiales solo si existen
    if (resultadosEspeciales.length > 0) {
      const listasEspeciales: ListaJson[] = [];
      resultadosEspeciales.forEach(resultadoEspecial => {
        resultadoEspecial['listas'].forEach((lista: any) => {
          listasEspeciales.push({
            apellidoCandidato: 'EN BLANCO',
            votosLista: lista['cant_votos']
          });
        });
      });

      const votosEspeciales = sumarElementosNumericos(listasEspeciales);
      const totalizacionEspeciales: Totalizacion = {
        cargo: cargo,
        distrito: distrito,
        nombreAgrupacion: 'VOTOS NEGATIVOS',
        sigla: 'NEG',
        votos: votosEspeciales,
        listas: listasEspeciales,
      };
      totalizaciones.push(totalizacionEspeciales);
    }

    return totalizaciones;
  } catch (error) {
    console.error('Error al reestructurar los datos:', error);
    throw error;
  }
}




