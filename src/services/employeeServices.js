const { User, Cpf, Department } = require('../db/models')

const createEmployee = async ({ name, birthDate, salary, cpf, department  }) => {
    const findEmployee = await User.findOne({ where: { name: name }})
    if (findEmployee) {
        return new Error('Registered Employee')
    }
    const createdCpf = await Cpf.create({ cpf })
    const createdDepartment = await Department.create({ department })
    const createdEmployee = await User.create({ 
        name,
        cpf_id: createdCpf.id,
        department_id: createdDepartment.id,
        salary,
        birth_date: birthDate
    })
    return createdEmployee;
}

module.exports = {
    createEmployee
}