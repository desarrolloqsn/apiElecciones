"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.DataStore = void 0;
const fs_1 = __importDefault(require("fs"));
const fs_2 = require("fs");
const xml_js_1 = __importDefault(require("xml-js"));
//import { FTPClient } from 'ftp-client';
//import {config, options} from '../config/config'
const dirPath = './src/db';
if (!fs_1.default.existsSync(dirPath)) {
    fs_1.default.mkdirSync(dirPath);
}
class DataStore {
    saveXml(data, filename) {
        let json;
        let FileName = filename;
        if ('total' in data) {
            json = JSON.stringify(data);
            console.log('Data saved de tipo total resultados xml');
        }
        else if ('totalMesas' in data) {
            json = JSON.stringify(data);
            console.log('Data saved de tipo total mesas en xml');
        }
        else {
            console.error('Error: Invalid data type');
            return Promise.reject('Invalid data type'); // Devolvemos un rechazo para indicar un error
        }
        const xmlData = xml_js_1.default.json2xml(json, { compact: true, spaces: 2 });
        return fs_2.promises.writeFile(FileName, xmlData, 'utf-8');
    }
    // save a copy of the json locally  
    saveLocal(data, filename) {
        let json;
        let FileName = filename;
        if ('total' in data) {
            json = JSON.stringify(data);
            console.log('Data saved de tipo total resultados');
        }
        else if ('totalMesas' in data) {
            json = JSON.stringify(data);
            console.log('Data saved de tipo total mesas');
        }
        else {
            console.error('Error: Invalid data type');
            return Promise.reject('Invalid data type'); // Devolvemos un rechazo para indicar un error
        }
        return fs_2.promises.writeFile(FileName, json, 'utf-8');
    }
    async saveDataInParallel(dataMesas, data) {
        const filnameMesas = './src/db/totalMesas.xml';
        const filnameMesasjson = './src/db/totalMesas.json';
        const filnameResult = './src/db/total.xml';
        const filnameResultjson = './src/db/total.json';
        await Promise.all([
            this.saveXml(dataMesas, filnameMesas),
            this.saveLocal(dataMesas, filnameMesasjson),
            this.saveXml(data, filnameResult),
            this.saveLocal(data, filnameResultjson),
        ]);
    }
    getData() {
        const FileName = `./db/data.xml`;
        try {
            const data = fs_1.default.readFileSync(FileName, 'utf-8');
            return data;
        }
        catch (error) {
            console.error('Error reading data:', error);
            return '';
        }
    }
}
exports.DataStore = DataStore;
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
exports.store = new DataStore();
//# sourceMappingURL=store.js.map