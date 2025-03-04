const Cliente = require('../models/cliente'); // Asegúrate de tener un modelo de cliente definido

// Controlador para obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los clientes' });
    }
};


// Controlador para crear un nuevo cliente
exports.crearCliente = async (req, res) => {
    try {
        const crearCliente = new Cliente(req.body);
        await crearCliente.save();
        res.json({ message: 'Cliente creado con éxito' });
    } catch (error) {
        console.error('Error al crear el cliente:', error); // Imprime el error completo
        res.status(500).json({ message: 'Error al crear el cliente', error: error.message });
    }
};


// Controlador para actualizar un cliente existente
exports.actualizarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const clienteActualizado = await Cliente.findByIdAndUpdate(id, req.body, { new: true });
        res.json(clienteActualizado);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el cliente' });
    }
};

// Controlador para eliminar un cliente
exports.eliminarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        await Cliente.findByIdAndDelete(id);
        res.json({ message: 'Cliente eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el cliente' });
    }
};
