const { Paciente } = require('../../models');

exports.getAll = async (req, res) => {
    try {
        const pacientes = await Paciente.findAll();
        res.json(pacientes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener pacientes' });
    }
};

exports.getById = async (req, res) => {
    try {
        const paciente = await Paciente.findByPk(req.params.id);

        if (!paciente) {
            return res.status(404).json({ error: 'Paciente no encontrado' });
        }

        res.json(paciente);
    } catch (error) {
        res.status(500).json({ error: 'Error del servidor' });
    }
};

exports.create = async (req, res) => {
    try {
        if (!req.body.nombre || !req.body.edad) {
            return res.status(400).json({ error: 'Datos incompletos' });
        }

        const nuevo = await Paciente.create(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear paciente' });
    }
};