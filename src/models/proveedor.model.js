const { Schema, model } = require('mongoose');

const proveedorSchema = new Schema({
    nombre: { type: String, required: true }, // Nombre del proveedor
    contacto: { type: String, required: true }, // Teléfono o email del proveedor
    direccion: { type: String, required: true }, // Dirección del proveedor
    productos: [{ type: Schema.Types.ObjectId, ref: 'Producto' }], // Relación con productos
}, {
    timestamps: true, // Agrega campos createdAt y updatedAt automáticamente
});

module.exports = model('Proveedor', proveedorSchema);