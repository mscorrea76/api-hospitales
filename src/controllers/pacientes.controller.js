const { Paciente, Tratamiento } = require('../../models');

// 🔹 Obtener todos los pacientes
exports.getAll = async (req, res) => {
    try {
        const pacientes = await Paciente.findAll();
        return res.json(pacientes);
    } catch (error) {
        return res.status(500).json({
            error: 'Error al obtener pacientes'
        });
    }
};

// 🔹 Obtener paciente por ID
exports.getById = async (req, res) => {
    try {
        const { id } = req.params;

        const paciente = await Paciente.findByPk(id);

        if (!paciente) {
            return res.status(404).json({
                error: 'Paciente no encontrado'
            });
        }

        return res.json(paciente);
    } catch (error) {
        return res.status(500).json({
            error: 'Error al obtener el paciente'
        });
    }
};

// 🔹 Crear paciente
exports.create = async (req, res) => {
    try {
        const { nombre, edad } = req.body;

        // Validación básica
        if (!nombre || !edad) {
            return res.status(400).json({
                error: 'Nombre y edad son obligatorios'
            });
        }

        const nuevoPaciente = await Paciente.create({
            nombre,
            edad
        });

        return res.status(201).json(nuevoPaciente);
    } catch (error) {
        return res.status(500).json({
            error: 'Error al crear paciente'
        });
    }
};

// 🔹 (EXTRA PRO) Obtener paciente con tratamientos
exports.getWithTratamientos = async (req, res) => {
    try {
        const { id } = req.params;

        const paciente = await Paciente.findByPk(id, {
            include: [Tratamiento]
        });

        if (!paciente) {
            return res.status(404).json({
                error: 'Paciente no encontrado'
            });
        }

        return res.json(paciente);
    } catch (error) {
        return res.status(500).json({
            error: 'Error al obtener paciente con tratamientos'
        });
    }
};