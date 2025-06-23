const mongoose = require('mongoose');

const proveedoresSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  contacto: { type: String, required: true },
  direccion: { type: String, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Proveedores', proveedoresSchema);
