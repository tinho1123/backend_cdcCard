const { Router } = require('express');
const employeeRouter = require('./employeeRouter');
const departmentRouter = require('./departmentRouter');

const route = Router();

route.use('/employee', employeeRouter)
route.use('/department', departmentRouter)

module.exports = route;