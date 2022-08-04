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

const updateEmployeeDepartment = async (req, res) => {
    const { id } = req.params;
    const { department } = req.body;
    const updateEmployee = await services.updateEmployeeDepartment(id, department)

    if (updateEmployee instanceof Error) {
        return res.status(400).json({ message: updateEmployee.message })
    }

    res.status(200).json(updateEmployee)
}

const updateEmployeeSalary = async (req, res) => {
    const { id } = req.params;
    const { salary } = req.body;
    const updateEmployee = await services.updateEmployeeSalary(id, salary)

    if (updateEmployee instanceof Error) {
        return res.status(400).json({ message: updateEmployee.message })
    }

    res.status(200).json(updateEmployee)
}

const deleteEmployee = async (req, res) => {
    const { id } = req.params;
    const deleteEmployee = await services.deleteEmployee(id);

    if (deleteEmployee instanceof Error) {
        return res.status(400).json({ message: deleteEmployee.message })
    }

    res.status(200).json(deleteEmployee)
}


module.exports = {
    createEmployee,
    getAllEmployee,
    getOneEmployee,
    updateEmployeeDepartment,
    updateEmployeeSalary,
    deleteEmployee
}