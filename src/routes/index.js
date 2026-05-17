const express = require('express');
const router = express.Router();

router.use('/pacientes', require('./pacientes.routes'));
router.use('/medicos', require('./medicos.routes'));
router.use('/tratamientos', require('./tratamientos.routes'));
router.use('/auth', require('./auth.routes'));

module.exports = router;