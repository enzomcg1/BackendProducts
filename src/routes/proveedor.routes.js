const express = require('express');
const router = express.Router();
const {
    createProveedor,
    getProveedores,
    getProveedorById,
    updateProveedor,
    deleteProveedor,
} = require('../controller/proveedor.controller');

// Crear un nuevo proveedor
router.post('/', createProveedor);

// Obtener todos los proveedores
router.get('/', getProveedores);

// Obtener un proveedor por ID
router.get('/:id', getProveedorById);

// Actualizar un proveedor por ID
router.put('/:id', updateProveedor);

// Eliminar un proveedor por ID
router.delete('/:id', deleteProveedor);

module.exports = router;