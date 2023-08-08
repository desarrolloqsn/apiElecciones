"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAllData = void 0;
const fetchController_1 = require("./fetchController");
const utils_1 = require("../utility/utils");
//-----------------Aca hace el llamado al archivo donde guardo todas las url--------------------
//-------------y las dejo almacenadas en la promesa la cual luego hace el guardado ----------------------
//--Aca es donde deberia de hacer los cambio para manejar las caidas del server con status---------------------  
async function fetchAllData() {
    const URLs = (0, utils_1.callUrls)();
    const dataPromises = URLs.map(async (e) => {
        return (0, fetchController_1.fetchData)(e.URL, e.PUESTO, e.DISTRITO);
    });
    const dataArray = await Promise.all(dataPromises);
    let data = { total: { valoresTotalizados: dataArray.flat() } };
    return data;
}
exports.fetchAllData = fetchAllData;
//# sourceMappingURL=flowControllers.js.map