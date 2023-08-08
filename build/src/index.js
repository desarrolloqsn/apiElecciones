"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const node_cron_1 = __importDefault(require("node-cron"));
const store_1 = require("./services/store");
const main_1 = __importDefault(require("./main"));
const app = (0, express_1.default)();
const port = 3000;
let cronJob = null;
// Función para iniciar el ciclo
function iniciarCiclo() {
    cronJob = node_cron_1.default.schedule('*/30 * * * * *', async () => {
        await (0, main_1.default)();
    });
    console.log('Ciclo iniciado.');
}
// Función para detener el ciclo
function detenerCiclo() {
    if (cronJob) {
        cronJob.stop();
        console.log('Ciclo detenido.');
    }
}
app.use((0, cors_1.default)());
app.use('', express_1.default.static('public'));
app.use('', express_1.default.static(`${__dirname}public`));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/data', (req, res) => {
    const data = store_1.store.getData();
    res.set('Content-Type', 'text/xml');
    res.send(data);
});
// Ruta para iniciar el ciclo
app.post('/iniciar-ciclo', async (req, res) => {
    try {
        iniciarCiclo();
        res.json({ message: 'Ciclo iniciado desde el backend.' });
    }
    catch (error) {
        console.error('Error al iniciar el ciclo:', error);
        res.status(500).json({ error: 'Error al iniciar el ciclo desde el backend.' });
    }
});
app.get('/mesas', (req, res) => {
    const xmlPath = path_1.default.resolve(__dirname, '../src/db/totalMesas.xml'); // Reemplaza 'resultado.xml' con el nombre real del archivo
    fs_1.default.readFile(xmlPath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo XML:', err);
            res.status(500).json({ error: 'Error al leer el archivo XML' });
        }
        else {
            res.send(data);
        }
    });
});
app.get('/resultados', (req, res) => {
    const xmlPath = path_1.default.resolve(__dirname, '../src/db/total.xml'); // Reemplaza 'resultado.xml' con el nombre real del archivo
    fs_1.default.readFile(xmlPath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo XML:', err);
            res.status(500).json({ error: 'Error al leer el archivo XML' });
        }
        else {
            res.send(data);
        }
    });
});
// Ruta para detener el ciclo
app.post('/detener-ciclo', async (req, res) => {
    try {
        detenerCiclo();
        res.json({ message: 'Ciclo detenido desde el backend.' });
    }
    catch (error) {
        console.error('Error al detener el ciclo:', error);
        res.status(500).json({ error: 'Error al detener el ciclo desde el backend.' });
    }
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map