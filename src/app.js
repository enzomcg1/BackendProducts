const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/producto', require('./routes/producto'));
app.use('/api/clientes', require('./routes/cliente'));
app.use('/api/ventas', require('./routes/venta.routes.js'));
app.use('/api/categorias', require('./routes/categoria.routes.js'));
app.use('/api/proveedores', require('./routes/proveedor.routes'));


module.exports = app;
