const { Router } = require('express');
const employeeRouter = require('./employeeRouter');

const route = Router();

route.use('/employee', employeeRouter)

module.exports = route;