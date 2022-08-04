const express = require('express');

const route = express.Router();

const controllers = require('../controllers/employeeControllers')

// Criar funcionário
route.post('/create', controllers.createEmployee)

// Pegar todos os funcionários

route.get('/', controllers.getAllEmployee)

// Pegar um funcionário

route.get('/:id', controllers.getOneEmployee)

// Editar funcionário

// Excluir funcionário

module.exports = route;
