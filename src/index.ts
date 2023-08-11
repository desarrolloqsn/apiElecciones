import express from 'express';
import cors from 'cors';
import { store } from './services/store';
import {iniciarCiclo,detenerCiclo} from './main'
import fs from 'fs';
import path from 'path'

const app = express();
const port = 3000;

app.use(cors());
app.use('', express.static('public'));
app.use('', express.static(`${__dirname}public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/data', (req, res) => {
  const data = store.getData();
  res.set('Content-Type', 'text/xml');
  res.send(data);
});

// Ruta para iniciar el ciclo
app.post('/iniciar-ciclo', async (req, res) => {
  try {
    iniciarCiclo();
    res.json({ message: 'Ciclo iniciado desde el backend.' });
  } catch (error) {
    console.error('Error al iniciar el ciclo:', error);
    res.status(500).json({ error: 'Error al iniciar el ciclo desde el backend.' });
  }
});

// Ruta para detener el ciclo
app.post('/detener-ciclo', async (req, res) => {
  try {
    detenerCiclo();
    res.json({ message: 'Ciclo detenido desde el backend.' });
  } catch (error) {
    console.error('Error al detener el ciclo:', error);
    res.status(500).json({ error: 'Error al detener el ciclo desde el backend.' });
  }
});

app.get('/mesas', (req, res) => {
  const xmlPath = path.resolve(__dirname, '../src/db/Recuento_Mesas.xml'); // Reemplaza 'resultado.xml' con el nombre real del archivo

  fs.readFile(xmlPath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo XML:', err);
      res.status(500).json({ error: 'Error al leer el archivo XML' });
    } else {
      res.send(data);
    }
  });
});
app.get('/resultados', (req, res) => {
  const xmlPath = path.resolve(__dirname, '../src/db/resultado.xml'); // Reemplaza 'resultado.xml' con el nombre real del archivo

  fs.readFile(xmlPath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo XML:', err);
      res.status(500).json({ error: 'Error al leer el archivo XML' });
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
