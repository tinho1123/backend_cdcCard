const services = require('../services/employeeServices');

const createEmployee = async (req, res) => {
    const createdEmployee = await services.createEmployee(req.body);

    if (createdEmployee instanceof Error) {
        return res.status(400).json({ message: createdEmployee.message })
    }

    res.status(200).json(createdEmployee)
}

const getAllEmployee = async (_req, res) => {
    const getEmployees = await services.getAllEmployee();

    if (getEmployees instanceof Error) {
        return res.status(400).json({ message: getEmployees.message })
    }

    res.status(200).json(getEmployees)
}

const getOneEmployee = async (req, res) => {
    const { id } = req.params;
    const getEmployee = await services.getOneEmployee(id);

    if (getEmployee instanceof Error) {
        return res.status(400).json({ message: getEmployee.message })
    }

    res.status(200).json(getEmployee)
}


module.exports = {
    createEmployee,
    getAllEmployee,
    getOneEmployee
}