const express = require('express');

const route = express.Router();

const controllers = require('../controllers/employeeControllers')
route.post(controllers.createEmployee)

module.exports = route;
