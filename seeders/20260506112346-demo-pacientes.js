'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pacientes', [
      {
        nombre: 'Gonzalo Gonzalez',
        edad: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Carolina Carolinez',
        edad: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pacientes', null, {});
  }
};