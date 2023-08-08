"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flowControllers_1 = require("./controller/flowControllers");
const flowControllers_2 = require("./controllers/flowControllers");
const store_1 = require("./services/store");
async function ejecutarEnParalelo() {
    try {
        console.time('fetchAllData');
        const store = new store_1.DataStore();
        const dataMesas = await (0, flowControllers_1.fetchAllData)();
        const dataElec = await (0, flowControllers_2.fetchAllData)();
        await store.saveDataInParallel(dataMesas, dataElec);
        console.timeEnd('fetchAllData');
    }
    catch (error) {
        console.error('Error:', error);
    }
}
exports.default = ejecutarEnParalelo;
//# sourceMappingURL=main.js.map