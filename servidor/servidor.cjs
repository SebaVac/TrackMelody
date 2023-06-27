const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware para analizar los cuerpos de las solicitudes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Ruta para guardar los datos del formulario en un archivo JSON
app.post('/api/registro', (req, res) => {
  const formData = req.body;  

  // Lee el archivo JSON existente (si existe)
  let existingData = [];
  try {
    const data = fs.readFileSync('registro.json');
    existingData = JSON.parse(data);
  } catch (error) {
    console.log('No se encontró ningún archivo JSON existente');
  }

  // Agrega los nuevos datos al arreglo existente
  existingData.push(formData);

  // Guarda los datos en el archivo JSON
  fs.writeFileSync('registro.json', JSON.stringify(existingData));

  res.json({ message: 'Los datos del formulario se han guardado correctamente' });
});

// Método GET para obtener los datos del formulario desde el archivo JSON
app.get('/api/registro', (req, res) => {
  try {
    const data = fs.readFileSync('registro.json');
    const formData = JSON.parse(data);
    res.json(formData);
  } catch (error) {
    console.log('Error al leer el archivo JSON de registro', error);
    res.status(500).json({ error: 'Error al obtener los datos del formulario' });
  }
});

// Método DELETE para eliminar los datos del formulario
app.delete('/api/registro', (req, res) => {
  try {
    fs.unlinkSync('registro.json');
    res.json({ message: 'Los datos del formulario han sido eliminados correctamente' });
  } catch (error) {
    console.log('Error al eliminar el archivo JSON de registro', error);
    res.status(500).json({ error: 'Error al eliminar los datos del formulario' });
  }
});

// Método PUT para actualizar los datos del formulario
app.put('/api/registro', (req, res) => {
  const updatedData = req.body;

  // Lee el archivo JSON existente
  let existingData = [];
  try {
    const data = fs.readFileSync('registro.json');
    existingData = JSON.parse(data);
  } catch (error) {
    console.log('No se encontró ningún archivo JSON existente');
  }

  // Actualiza los datos existentes con los nuevos datos
  existingData = updatedData;

  // Guarda los datos actualizados en el archivo JSON
  fs.writeFileSync('registro.json', JSON.stringify(existingData));

  res.json({ message: 'Los datos del formulario se han actualizado correctamente' });
});

// Inicia el servidor
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});