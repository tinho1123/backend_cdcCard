const express = require('express');

const route = express.Router();

const controllers = require('../controllers/employeeControllers')
const middlewares = require('../middlewares/employeeMiddlewares');

// Criar funcionário
route.post(
    '/',
    middlewares.validateName,
    middlewares.validateCpf,
    middlewares.validateDepartment,
    middlewares.validateSalary,
    middlewares.validateBirthDate,
    controllers.createEmployee
    )

// Pegar todos os funcionários

route.get('/', controllers.getAllEmployee)

// Pegar um funcionário

route.get('/:id', controllers.getOneEmployee)

// Editar funcionário

route.put(
    '/:id',
    middlewares.validateName,
    middlewares.validateCpf,
    middlewares.validateDepartment,
    middlewares.validateSalary,
    middlewares.validateBirthDate, 
    controllers.updateEmployee
    )


// Excluir funcionário

route.delete('/:id', controllers.deleteEmployee)

module.exports = route;
