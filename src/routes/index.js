const express = require('express');
const router = express.Router();

router.use('/pacientes', require('./pacientes.routes'));
router.use('/medicos', require('./medicos.routes'));
router.use('/tratamientos', require('./tratamientos.routes'));

module.exports = router;