'use strict';

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('employee', {
    name: DataTypes.STRING,
    cpf_id: DataTypes.INTEGER,
    department_id: DataTypes.INTEGER,
    salary: DataTypes.STRING,
    birth_date: DataTypes.DATE

  }, {
    modelName: 'Employees',
    sequelize,
  });

  Employee.associate = (models) => {
    Employee.belongsTo(models.cpf, { foreignKey: 'cpf_id', as: "CPF" })
    Employee.belongsTo(models.department, { foreignKey: 'department_id', as: "Department" })
  }
  return Employee;
}

