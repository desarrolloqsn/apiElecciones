import axios, { AxiosResponse } from "axios";
import { Totalizacion } from "../../models/controllesInterface";
import { Resultado } from "./interface";
import { reestructurarDatos } from "./parcerControllers";

export async function fetchData(url: string, distrito: string, puesto: string, meta: any): Promise<Totalizacion[]> {
    let jsonFinal: Totalizacion[] = [];
    const candidaturas = meta;
    try {
      const response: AxiosResponse = await axios.get(url);
      const jsonFinalCaba = response.data;
      const cargo = jsonFinalCaba['cargo'];
  
      for (const resultado of jsonFinalCaba['resultados']) {
        const id_candidatura = resultado['id_candidatura'];
        const id_partido = id_candidatura.split('.')[0];
        resultado['id_partido'] = id_partido;
      }
  
      const agrupados: { [key: string]: Resultado[] } = {};
  
      for (const resultado of jsonFinalCaba['resultados']) {
        const clave = resultado['id_partido'];
        if (!agrupados[clave]) {
          agrupados[clave] = [];
        }
        agrupados[clave].push({
          'cant_votos': resultado['cant_votos'],
          'id_candidatura': resultado['id_candidatura'],
          'clase_candidatura': resultado['clase_candidatura'],
          'descripcion_candidatura': resultado['descripcion_candidatura'],
        });
      }
  
      jsonFinalCaba['resultados'] = Object.entries(agrupados).flatMap(([clave, lista_elementos]) => {
        return lista_elementos.map(resultado => {
          return {
            'id_partido': clave,
            'listas': lista_elementos
          };
        });
      });
  
      // Traer nombre del partido y candidato
      for (const resultado of jsonFinalCaba['resultados']) {
        const id_partido = resultado['id_partido'];
        let votos_totales = 0;
        for (const candidatura of candidaturas['candidaturas']) {
          if (candidatura['clase'] === 'Partido' && candidatura['id_candidatura'] === id_partido) {
            resultado['nombreAgrupacion'] = candidatura['descripcion_candidatura'];
            resultado['sigla'] = candidatura['nombre_corto'];
  
            for (const lista_result of resultado['listas']) {
              for (const lista of candidatura['listas']) {
                if (lista['id_candidatura'] === lista_result['id_candidatura']) {
  
                  const candidato = lista['candidatos_principales'][cargo];
                  if (candidato) {
                    lista_result['descripcion'] = candidato['descripcion'];
                  }
  
                  votos_totales += lista_result['cant_votos'];
                  break;
                }
              }
            }
  
            break;
          }
        }
       resultado['votos'] = votos_totales;
      }

      const jsonFinal = reestructurarDatos(jsonFinalCaba, puesto, distrito)
      
      return jsonFinal;
    } catch (error: any) {
      console.log(error.message);
      throw error;
    }
  } 

 