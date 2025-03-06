const { Router } = require('express');
const {
    createCategoria,
    getCategorias,
    getCategoriaById,
    updateCategoria,
    deleteCategoria,
} = require('../controller/categoria.controller.js');
const router = Router();

router.route('/')
    .post(createCategoria) // Crear una nueva categoría
    .get(getCategorias);   // Obtener todas las categorías

router.route('/:id')
    .get(getCategoriaById)   // Obtener una categoría por ID
    .put(updateCategoria)    // Actualizar una categoría por ID
    .delete(deleteCategoria); // Eliminar una categoría por ID

module.exports = router;