const { Medico, Tratamiento, Paciente } = require('../../models');

// Obtener todos los médicos
exports.getAll = async (req, res) => {
    try {
        const medicos = await Medico.findAll();
        return res.json(medicos);
    } catch (error) {
        return res.status(500).json({
            error: 'Error al obtener médicos'
        });
    }
};

// Obtener médico por ID
exports.getById = async (req, res) => {
    try {
        const { id } = req.params;

        const medico = await Medico.findByPk(id);

        if (!medico) {
            return res.status(404).json({
                error: 'Médico no encontrado'
            });
        }

        return res.json(medico);
    } catch (error) {
        return res.status(500).json({
            error: 'Error al obtener el médico'
        });
    }
};

// Crear médico
exports.create = async (req, res) => {
    try {
        const { nombre, especialidad } = req.body;

        // Validación básica
        if (!nombre || !especialidad) {
            return res.status(400).json({
                error: 'Nombre y especialidad son obligatorios'
            });
        }

        const nuevoMedico = await Medico.create({
            nombre,
            especialidad
        });

        return res.status(201).json(nuevoMedico);
    } catch (error) {
        return res.status(500).json({
            error: 'Error al crear médico'
        });
    }
};