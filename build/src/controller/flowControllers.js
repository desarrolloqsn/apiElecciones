"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAllData = void 0;
const fetchController_1 = require("./fetchController");
const utils_1 = require("../utility/utils");
async function fetchAllData() {
    const URLs = (0, utils_1.callUrls)();
    const dataPromises = URLs
        .filter((e) => e.NIVEL !== "") // Filtrar aquellos con NIVEL no vacío
        .map(async (e) => await (0, fetchController_1.fetchData)(e.URL, e.DISTRITO, e.NIVEL));
    const dataArray = await Promise.all(dataPromises);
    let data = { total: { recuentoMesas: dataArray.flat() } };
    return data;
}
exports.fetchAllData = fetchAllData;
//# sourceMappingURL=flowControllers.js.map