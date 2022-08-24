'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('departments', [
    {
      department: 'Administrativo',
    },
    {
      department: 'Financeiro',
    },
    {
      department: 'Recursos Humanos',
    },
    {
    department: 'Setor comercial'
    },
    {
      department: 'Setor jurídico'
      },
    {
      department: 'Setor operacional'
    },
    {
      department: 'TI'
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('departments', null, {});
  }
};
