"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flowControllers_1 = require("./flowControllers");
async function fetchAndSaveDataMesasToStore(store) {
    const filename = "totalMesas.xml"; // proporciona el nombre del archivo que deseas usar
    try {
        const dataPromise = await (0, flowControllers_1.fetchAllData)();
        store.saveLocal(dataPromise, filename);
        store.saveXml(dataPromise, filename);
        //store.saveStore(dataPromise)
    }
    catch (error) {
    }
}
exports.default = fetchAndSaveDataMesasToStore;
//# sourceMappingURL=saveControllers.js.map