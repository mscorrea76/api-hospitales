const jwt = require('jsonwebtoken');
const constants = require('../consts/constants');

const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            error: 'Token requerido'
        });
    }

    const token = authHeader.split(' ')[1];

    try {

        const decoded = jwt.verify(
            token,
            constants.JWT_SECRET
        );

        req.user = decoded;

        next();

    } catch (error) {

        return res.status(401).json({
            error: 'Token inválido'
        });
    }
};

module.exports = authMiddleware;