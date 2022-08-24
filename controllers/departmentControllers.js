const services = require('../services/departmentServices');

const getAllDepartments = async (_req, res) => {
    const getDepartments = await services.getAllDepartments();

    if (getDepartments instanceof Error) {
        return res.status(400).json({ message: getDepartments.message })
    }

    res.status(200).json(getDepartments)
}

module.exports = {
    getAllDepartments,
}