const Proveedores = require('../models/Proveedores');

// Obtener todos los proveedores
const obtenerProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedores.find();
    res.json(proveedores);
  } catch (error) {
    console.error('Error obteniendo proveedores:', error);
    res.status(500).json({ mensaje: 'Error al obtener proveedores' });
  }
};

// Agregar proveedor
const agregarProveedor = async (req, res) => {
  try {
    const nuevoProveedor = new Proveedores(req.body);
    await nuevoProveedor.save();
    res.status(201).json(nuevoProveedor);
  } catch (error) {
    console.error('Error guardando proveedor:', error);
    res.status(400).json({ mensaje: 'Error al guardar proveedor' });
  }
};

// Eliminar proveedor
const eliminarProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    await Proveedores.findByIdAndDelete(id);
    res.status(200).json({ mensaje: 'Proveedor eliminado con éxito' });
  } catch (error) {
    console.error('Error eliminando proveedor:', error);
    res.status(500).json({ mensaje: 'Error al eliminar proveedor' });
  }
};

module.exports = {
  obtenerProveedores,
  agregarProveedor,
  eliminarProveedor,
};
