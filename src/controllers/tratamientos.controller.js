const { Tratamiento, Paciente, Medico } = require('../../models');

// Obtener todos los tratamientos (CON RELACIONES)
exports.getAll = async (req, res) => {
    try {
        const tratamientos = await Tratamiento.findAll({
            include: [
                { model: Paciente },
                { model: Medico }
            ]
        });

        return res.json(tratamientos);
    } catch (error) {
        return res.status(500).json({
            error: 'Error al obtener tratamientos'
        });
    }
};

// Obtener tratamiento por ID (CON RELACIONES)
exports.getById = async (req, res) => {
    try {
        const { id } = req.params;

        const tratamiento = await Tratamiento.findByPk(id, {
            include: [
                { model: Paciente },
                { model: Medico }
            ]
        });

        if (!tratamiento) {
            return res.status(404).json({
                error: 'Tratamiento no encontrado'
            });
        }

        return res.json(tratamiento);
    } catch (error) {
        return res.status(500).json({
            error: 'Error al obtener tratamiento'
        });
    }
};

// Crear tratamiento
exports.create = async (req, res) => {
    try {
        const { descripcion, PacienteId, MedicoId } = req.body;

        // Validaciones básicas
        if (!descripcion || !PacienteId || !MedicoId) {
            return res.status(400).json({
                error: 'Descripción, PacienteId y MedicoId son obligatorios'
            });
        }

        // Verificar existencia de relaciones
        const paciente = await Paciente.findByPk(PacienteId);
        if (!paciente) {
            return res.status(404).json({
                error: 'Paciente no existe'
            });
        }

        const medico = await Medico.findByPk(MedicoId);
        if (!medico) {
            return res.status(404).json({
                error: 'Médico no existe'
            });
        }

        const nuevoTratamiento = await Tratamiento.create({
            descripcion,
            PacienteId,
            MedicoId
        });

        return res.status(201).json(nuevoTratamiento);
    } catch (error) {
        return res.status(500).json({
            error: 'Error al crear tratamiento'
        });
    }
};