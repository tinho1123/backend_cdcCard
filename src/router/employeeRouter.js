const express = require('express');

const route = express.Router();

const controllers = require('../controllers/employeeControllers')

// Criar funcionário
route.post('/', controllers.createEmployee)

// Pegar todos os funcionários

route.get('/', controllers.getAllEmployee)

// Pegar um funcionário

route.get('/:id', controllers.getOneEmployee)

// Editar funcionário

// Editar departamento
route.put('/department/:id', controllers.updateEmployeeDepartment)

// Editar salário
route.put('/salary/:id', controllers.updateEmployeeSalary)

// Excluir funcionário

route.delete('/:id', controllers.deleteEmployee)

module.exports = route;
