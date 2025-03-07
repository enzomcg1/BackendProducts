const Proveedor = require('../models/proveedor.model');

// Crear un nuevo proveedor
const createProveedor = async (req, res) => {
    try {
        const nuevoProveedor = new Proveedor(req.body);
        await nuevoProveedor.save();
        res.status(201).json(nuevoProveedor);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear proveedor', error });
    }
};

// Obtener todos los proveedores
const getProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedor.find().populate('productos');
        res.json(proveedores);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener proveedores', error });
    }
};

// Obtener un proveedor por ID
const getProveedorById = async (req, res) => {
    try {
        const proveedor = await Proveedor.findById(req.params.id).populate('productos');
        if (!proveedor) {
            return res.status(404).json({ message: 'Proveedor no encontrado' });
        }
        res.json(proveedor);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el proveedor', error });
    }
};

// Actualizar un proveedor por ID
const updateProveedor = async (req, res) => {
    try {
        const proveedorActualizado = await Proveedor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Devuelve el documento actualizado
        ).populate('productos');
        if (!proveedorActualizado) {
            return res.status(404).json({ message: 'Proveedor no encontrado' });
        }
        res.json(proveedorActualizado);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el proveedor', error });
    }
};

// Eliminar un proveedor por ID
const deleteProveedor = async (req, res) => {
    try {
        const proveedorEliminado = await Proveedor.findByIdAndDelete(req.params.id);
        if (!proveedorEliminado) {
            return res.status(404).json({ message: 'Proveedor no encontrado' });
        }
        res.json({ message: 'Proveedor eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el proveedor', error });
    }
};

module.exports = {
    createProveedor,
    getProveedores,
    getProveedorById,
    updateProveedor,
    deleteProveedor,
};