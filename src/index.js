const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

// rutas
app.use('/api', require('./routes'));

const constants = require('./consts/constants');

app.listen(constants.PORT, () => {
    console.log(`Servidor corriendo en puerto ${constants.PORT}`);
});