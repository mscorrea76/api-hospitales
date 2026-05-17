const authMiddleware = require('../middlewares/auth.middleware');
const express = require('express');
const router = express.Router();
const controller = require('../controllers/tratamientos.controller');

router.get('/', authMiddleware, controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);

module.exports = router;