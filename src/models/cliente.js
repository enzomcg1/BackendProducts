const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    CI: { type: String, required: true },
    creditoAcumulado: { type: Number, default: 0 } // Asumiendo que es un número
});

module.exports = mongoose.model('Cliente', clienteSchema);
