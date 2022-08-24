const express = require('express');

const route = express.Router();

const controllers = require('../controllers/departmentControllers')

// Pegar todos os departamentos

route.get('/', controllers.getAllDepartments)

module.exports = route;
