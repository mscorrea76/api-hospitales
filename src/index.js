const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

// rutas
app.use('/pacientes', require('./routes/pacientes.routes'));
app.use('/medicos', require('./routes/medicos.routes'));
app.use('/tratamientos', require('./routes/tratamientos.routes'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});