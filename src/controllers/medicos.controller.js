exports.getAll = (req, res) => {
    res.send('Listado de medicos');
};

exports.getById = (req, res) => {
    res.send(`Información del medico ${req.params.id}`);
};

exports.create = (req, res) => {
    res.send('Crear medico');
};