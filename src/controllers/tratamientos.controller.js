exports.getAll = (req, res) => {
    res.send('Listado de tratamientos');
};

exports.getById = (req, res) => {
    res.send(`Información del tratamiento ${req.params.id}`);
};

exports.create = (req, res) => {
    res.send('Crear tratamiento');
};