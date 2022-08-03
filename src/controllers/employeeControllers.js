const services = require('../services/employeeServices');

const createEmployee = (req, res) => {
    const createdEmployee = services.createEmployee(req.body);

    if (createdEmployee instanceof Error) {
        return res.status(400).json({ message: createdEmployee.message })
    }

    res.status(200).json(createdEmployee)
}

module.exports = {
    createEmployee
}