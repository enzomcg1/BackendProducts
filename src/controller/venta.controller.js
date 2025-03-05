const Venta = require('../models/venta.model');

exports.crearVenta = async (req, res) => {
    try {
        const venta = new Venta(req.body);
        await venta.save();
        res.status(201).json({ message: 'Venta guardada exitosamente', venta });
    } catch (error) {
        res.status(500).json({ message: 'Error al guardar la venta', error });
    }
};

exports.obtenerVentas = async (req, res) => {
    try {
        const ventas = await Venta.find().populate('clienteId').populate('productos._id');
        res.json(ventas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las ventas', error });
    }
};