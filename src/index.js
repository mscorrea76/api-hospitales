const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

// rutas
app.use('/api', require('./routes'));

const constants = require('./const/constants');

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});