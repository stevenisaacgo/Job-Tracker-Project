require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');

const app = express();

// Conectar a MongoDB
connectDB();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Backend funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
