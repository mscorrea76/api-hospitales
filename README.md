Descripción

Este proyecto consiste en el desarrollo de una API REST utilizando NodeJS y Express, como parte del Trabajo Práctico correspondiente a los módulos iniciales del curso.

La API simula el funcionamiento de un sistema hospitalario, incluyendo las siguientes entidades:

Pacientes
Médicos
Tratamientos
Tecnologías utilizadas
NodeJS
Express
Nodemon
Dotenv
Estructura del proyecto
src/
│
├── index.js
├── routes/
├── controllers/
└── const/

Instalación y ejecución
Clonar el repositorio:
git clone URL_DEL_REPO
Instalar dependencias:
npm install
Ejecutar el servidor:
npm start

El servidor se ejecuta en:

http://localhost:3000
Endpoints disponibles
a) Médicos
GET /medicos → Listado de médicos
GET /medicos/ → Información de un médico
POST /medicos → Crear médico
b) Pacientes
GET /pacientes → Listado de pacientes
GET /pacientes/ → Información de un paciente
POST /pacientes → Crear paciente
c) Tratamientos
GET /tratamientos → Listado de tratamientos
GET /tratamientos/ → Información de un tratamiento
POST /tratamientos → Crear tratamiento

Notas
En esta etapa, los endpoints simulan el comportamiento del sistema devolviendo mensajes estáticos, sin conexión a base de datos.

Autor
Martín Sebastián Correa MP CPCIBA 886


06/05/2026 TP 2 - Base de Datos

Este proyecto utiliza Sequelize como ORM y SQLite como base de datos.

Se incluyen migraciones y seeders para la creación y carga de datos iniciales.

Comandos utilizados
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all