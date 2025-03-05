const express = require('express');
const router = express.Router();
const ventaController = require('../controller/venta.controller');

router.post('/', ventaController.crearVenta);
router.get('/', ventaController.obtenerVentas);

module.exports = router;