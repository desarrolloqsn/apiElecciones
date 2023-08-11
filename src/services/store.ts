import fs from 'fs';
import { Client as FTPClient } from 'basic-ftp';
import { promises as fsPromises } from 'fs';
import  convert  from 'xml-js';
import {  total, totalMesas } from 'src/models/controllesInterface';
const dirPath = './src/db';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}
export class DataStore {
  private data!: total | totalMesas;
saveXml(data: total | totalMesas,filename:string): Promise<void> {
    let json: string;
    let FileName: string = filename;

    if ('total' in data) {
      json = JSON.stringify(data);
      console.log('Data saved de tipo total resultados xml');
    } else if ('totalMesas' in data) {
      json = JSON.stringify(data);
      console.log('Data saved de tipo total mesas en xml');
    } else {
      console.error('Error: Invalid data type');
      return Promise.reject('Invalid data type'); // Devolvemos un rechazo para indicar un error
    }

    const xmlData = convert.json2xml(json, { compact: true, spaces: 2 });
    return fsPromises.writeFile(FileName, xmlData, 'utf-8');
  }
// save a copy of the json locally  
saveLocal(data: total | totalMesas, filename:string): Promise<void> {
  let json: string;
  let FileName: string = filename

  if ('total' in data) {
    json = JSON.stringify(data);
    console.log('Data saved de tipo total resultados');
  } else if ('totalMesas' in data) {
    json = JSON.stringify(data);
    console.log('Data saved de tipo total mesas');
  } else {
    console.error('Error: Invalid data type');
    return Promise.reject('Invalid data type'); // Devolvemos un rechazo para indicar un error
  }

  return fsPromises.writeFile(FileName, json, 'utf-8');
}
async saveDataInParallel(dataMesas: totalMesas, data: total): Promise<void> {

const filnameMesas= './src/db/recuento_Mesas.xml'
const filnameMesasjson= './src/db/recuento_Mesas.json'
const filnameResult =  './src/db/resultado.xml'
const filnameResultjson = './src/db/resultado.json'
  await Promise.all([
    this.saveXml(dataMesas, filnameMesas),
    this.saveLocal(dataMesas,filnameMesasjson),
    this.saveXml(data, filnameResult),
    this.saveLocal(data, filnameResultjson),
   // this.saveStore()
  ]);
}

async saveStore(): Promise<void> {
  const filnameResult =  './src/db/Resultados.xml'
  const client = new FTPClient();
  client.ftp.verbose = true
  try {
        await client.access({
          host: 'ftp.telearteonline.net',
          user: 'datoselecciones',
          port: 21,
          password:'Pjos7(Ld33',
          secure: true
        })
        await client.cd('/');
        await client.uploadFrom(filnameResult, 'Resultados.xml')
        console.log('se envio con exito')
      }
      catch(err) {
        console.log(err)
      }
      client.close()
    }
    getData(): string { 
            const FileName = `./db/data.xml`;
            try {
                const data = fs.readFileSync(FileName, 'utf-8');
                return data;
            } catch (error) {
                console.error('Error reading data:', error);
        return '';
      }
    }
  }
  export  const store = new DataStore();