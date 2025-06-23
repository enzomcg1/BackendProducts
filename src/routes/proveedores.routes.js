const express = require('express');
const router = express.Router();
const {
  obtenerProveedores,
  agregarProveedor,
  eliminarProveedor,
} = require('../controller/proveedores.controller');

router.get('/', obtenerProveedores);
router.post('/', agregarProveedor);
router.delete('/:id', eliminarProveedor);

module.exports = router;
