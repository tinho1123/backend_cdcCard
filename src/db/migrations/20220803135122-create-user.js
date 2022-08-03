'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        
      },
      cpfId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'cpf_id',
        references: {
          model: 'cpfs',
          key: 'id' 
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE', 
      },
      departmentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'department_id',
        references: {
          model: 'departments',
          key: 'id' 
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE', 
      },
      salary: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birthDate: {
        type: Sequelize.STRING,
        field: 'birth_date',
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};