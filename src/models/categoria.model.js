const { Schema, model } = require('mongoose');

const categoriaSchema = new Schema({
    nombre: { type: String, required: true, unique: true }, // Nombre único de la categoría
});

module.exports = model('Categoria', categoriaSchema);