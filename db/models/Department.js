'use strict';

module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('department', {
    department: DataTypes.STRING,

  }, {
    modelName: 'departments',
    timestamps: false,
    sequelize,
  });

  Department.associate = (models) => {
    Department.hasOne(models.employee, { foreignKey: 'department_id', as: "Department"})
  }
  return Department;
}

