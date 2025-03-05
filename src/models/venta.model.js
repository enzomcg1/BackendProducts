const mongoose = require('mongoose');

const VentaSchema = new mongoose.Schema({
    clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    productos: [{
        _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
        nombre: String,
        precio: Number,
        cantidad: Number
    }],
    total: { type: Number, required: true },
    tipoVenta: { type: String, enum: ['contado', 'credito'], required: true },
    fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Venta', VentaSchema);
