const express = require('express');
const router = express.Router();

// Importa el controlador de clientes
const clienteController = require('../controller/clientes.controller');

// Rutas para manejar clientes
router.get('/', clienteController.obtenerClientes);
router.post('/', clienteController.crearCliente);
router.put('/:id', clienteController.actualizarCliente);
router.delete('/:id', clienteController.eliminarCliente);

module.exports = router;
