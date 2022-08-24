'use strict';

module.exports = (sequelize, DataTypes) => {
  const Cpf = sequelize.define('cpf', {
    cpf: DataTypes.STRING,

  }, {
    modelName: 'cpfs',
    timestamps: false,
    sequelize,
  });

  Cpf.associate = (models) => {
    Cpf.hasOne(models.employee, { foreignKey: 'cpf_id', as: "CPF"})
  }
  return Cpf;
}

