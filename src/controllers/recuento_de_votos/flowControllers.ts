import { Url, recuentoMesas, totalMesas } from "src/models/controllesInterface";
import { fetchData } from "./fetchController";
import { callUrls } from '../../utility/utils';

export async function fetchAllData(): Promise<totalMesas> {
  const URLs: Url[] = callUrls();
  const dataPromises = URLs
    .filter((e) => e.NIVEL !== "") // Filtrar aquellos con NIVEL no vacío
    .map(async (e) => await fetchData(e.URL, e.DISTRITO, e.NIVEL));

  const dataArray: recuentoMesas[][] = await Promise.all(dataPromises);
  let data: totalMesas = { total: { recuentoMesas: dataArray.flat() } };
  return data;
}



