const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: { type: String, required: true },
    stock: { type: Number, default: 0 },
    proveedor: { type: Schema.Types.ObjectId, ref: 'Proveedor' }, // Relación con proveedor
});
module.exports = model('Producto', usuarioSchema);
