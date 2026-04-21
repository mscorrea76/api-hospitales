exports.getAll = (req, res) => {
    res.send('Listado de pacientes');
};

exports.getById = (req, res) => {
    res.send(`Información del paciente ${req.params.id}`);
};

exports.create = (req, res) => {
    res.send('Crear paciente');
};