'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('Tratamientos', [
  {
    descripcion: 'Ecocardiograma y luego reposo',
    PacienteId: 1,
    MedicoId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
