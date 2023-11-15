import fs from 'fs';
import { Client as FTPClient } from 'basic-ftp';
import { promises as fsPromises } from 'fs';
import convert from 'xml-js';
import { Mapas, MapasPBA, total, totalMesas } from 'src/models/controllesInterface';

const dirPath = './src/db';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

export class DataStore {
  private data!: total | totalMesas | Mapas | MapasPBA;

  private async saveToFile(data: any, filename: string, isXml: boolean): Promise<void> {
    const json = JSON.stringify(data);
    const content = isXml ? convert.json2xml(json, { compact: true, spaces: 2 }) : json;
    await fsPromises.writeFile(filename, content, 'utf-8');
    console.log(`Data saved to ${filename}`);
  }

  public async saveXml(data: total | totalMesas | Mapas | MapasPBA, filename: string): Promise<void> {
 
    await this.saveToFile(data, filename, true);
  }

  public async saveLocal(data: total | totalMesas |  Mapas | MapasPBA, filename: string): Promise<void> {

    await this.saveToFile(data, filename, false);
  }

  async saveDataInParallel(dataMesas: totalMesas, data: total, mapasArg: Mapas, /*mapasPBA: MapasPBA*/): Promise<void> {
// console.log(JSON.stringify(mapasArg))
// console.log(JSON.stringify(mapasPBA))
    const fileNames = {
      filnameMapasArg: './src/db/MapaARG.xml',
      filnameMapasArgjson: './src/db/MapaARG.json',
      filnameMesas: './src/db/recuento_mesas.xml',
      filnameMesasjson: './src/db/recuento_mesas.json',
      filnameResult: './src/db/resultado.xml',
      filnameResultjson: './src/db/resultado.json',
      filnameMapasPBA: './src/db/MapaPBA.xml',
      filnameMapasPBAjson: './src/db/MapaPBA.json',
    };

    await Promise.all([
      this.saveXml(dataMesas, fileNames.filnameMesas),
      this.saveLocal(dataMesas, fileNames.filnameMesasjson),
      this.saveXml(data, fileNames.filnameResult),
      this.saveLocal(data, fileNames.filnameResultjson),
      this.saveXml(mapasArg, fileNames.filnameMapasArg),
      this.saveLocal(mapasArg, fileNames.filnameMapasArgjson),
      // this.saveXml(mapasPBA, fileNames.filnameMapasPBA),
      // this.saveLocal(mapasPBA, fileNames.filnameMapasPBAjson),
      // this.saveStore()
    ]);
  }

  public async saveStore(): Promise<void> {
    const fileNames = {
      filnameResult: './src/db/resultado.xml',
      filnameReconteMesas: './src/db/recuento_mesas.xml',
      filnameResultCaba: './src/db/resultados_CABA.xml',
      filnameMapasArg: './src/db/MapaARG.xml',
      // filnameMapasPBA: './src/db/MapaPBA.xml',

    };

    const client = new FTPClient();
    client.ftp.verbose = true;

    // Configurar opciones de validación personalizadas
    const tlsOptions = {
      rejectUnauthorized: false, // Permitir certificados autofirmados
    };

    try {
      // Conexión al servidor FTP con opciones de validación personalizadas
      console.log('Conectando al servidor FTP...');
      await client.access({
        host: 'ftp.telearteonline.net',
        user: 'datoselecciones',
        port: 21,
        password: 'Pjos7(Ld33',
        secure: true,
        secureOptions: tlsOptions,
      });

      // Cambio al directorio raíz en el servidor FTP
      await client.cd('/');
      // Subir los archivos
      await client.uploadFrom(fileNames.filnameResult, 'resultado.xml');
      console.log('El archivo de resultados se envió con éxito.');
      await client.uploadFrom(fileNames.filnameReconteMesas, 'recuento_mesas.xml');
      console.log('El archivo de recuento de mesas se envió con éxito.');
      await client.uploadFrom(fileNames.filnameMapasArg, 'MapaArg.xml');
      console.log('El archivo de mapas ARG se envió con éxito.');
      // await client.uploadFrom(fileNames.filnameMapasPBA, 'MapaPBA.xml');
      // console.log('El archivo de mapas PBA se envió con éxito.');
    } catch (err) {
      console.error('Error al enviar los archivos:', err);
    } finally {
      client.close();
    }
  }

  public getData(): string {
    const FileName = `./db/data.xml`;
    try {
      const data = fs.readFileSync(FileName, 'utf-8');
      return data;
    } catch (error) {
      console.error('Error al leer los datos:', error);
      return '';
    }
  }
}

export const store = new DataStore();
