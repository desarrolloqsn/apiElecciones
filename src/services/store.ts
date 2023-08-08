import fs from 'fs';
import { promises as fsPromises } from 'fs';
import  convert  from 'xml-js';
import {  total, totalMesas } from 'src/models/controllesInterface';
//import { FTPClient } from 'ftp-client';
//import {config, options} from '../config/config'
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
saveLocal(data: total | totalMesas,filename:string): Promise<void> {
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

const filnameMesas= './src/db/totalMesas.xml'
const filnameMesasjson= './src/db/totalMesas.json'
const filnameResult =  './src/db/total.xml'
const filnameResultjson = './src/db/total.json'
  await Promise.all([
    this.saveXml(dataMesas, filnameMesas),
    this.saveLocal(dataMesas,filnameMesasjson),
    this.saveXml(data, filnameResult),
    this.saveLocal(data, filnameResultjson),
  ]);
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
//----------------------PENDIENTE------------------------------
// debo pasar las ftpOptions para configurar la secciones a la store 

//------------------------Estoy probando aqui--------------------------
// saveStore(xmlData: total, ftpOptions?:any ): void {
//   const FileName =  `./db/data.xml`;
//   try {
//     fs.writeFileSync(FileName, xmlData, 'utf-8');
//     console.log(`Data saved to ${FileName}`);

//     if (ftpOptions) {
//       const client = new FTPClient(ftpOptions);
//       client.connect(() => {
//         client.upload(fs.createReadStream(FileName), FileName, (error) => {
//           if (error) {
//             console.error('Error uploading file to FTP:', error);
//           } else {
//             console.log(`File ${FileName} uploaded to FTP server`);
//           }
//           client.end();
//         });
//       });
//     }
//   } catch (error) {
//     console.error('Error saving data:', error);
//   }
// }

//------------------------Estoy probando aqui--------------------------
export  const store = new DataStore();