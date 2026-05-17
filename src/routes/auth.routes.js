const express = require('express');
const router = express.Router();

const controller = require('../controllers/auth.controller');

router.post('/login', controller.login);

router.get('/perfil', authMiddleware, (req, res) => {

    return res.json({
        usuario: req.user
    });
    
module.exports = router;