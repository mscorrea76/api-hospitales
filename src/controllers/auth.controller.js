const jwt = require('jsonwebtoken');
const constants = require('../consts/constants');

exports.login = async (req, res) => {

    const { usuario, password } = req.body;

    if (usuario !== 'admin' || password !== '1234') {
        return res.status(401).json({
            error: 'Credenciales inválidas'
        });
    }

    const token = jwt.sign(
        {
            usuario: usuario
        },
        constants.JWT_SECRET,
        {
            expiresIn: '1h'
        }
    );

    return res.json({
        token
    });
};