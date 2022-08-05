const { employee: Employee, department: Department, cpf: Cpf } = require('../db/models')


const getAllDepartments = async () => {
    const departments = await Department.findAll()

    if (!departments) {
        return new Error('No have departments')
    }

    return departments;
}

module.exports = {
    getAllDepartments,
}