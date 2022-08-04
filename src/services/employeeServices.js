const { employee: Employee, department: Department, cpf: Cpf } = require('../db/models')

const createEmployee = async ({ name, birthDate, salary, cpf, department  }) => {
    const findEmployee = await Employee.findOne({ where: { name: name }})
    if (findEmployee) {
        return new Error('Registered Employee')
    }
    const createdCpf = await Cpf.create({ cpf })
    const createdDepartment = await Department.create({ department })
    const createdEmployee = await Employee.create({ 
        name,
        cpf_id: createdCpf.id,
        department_id: createdDepartment.id,
        salary,
        birth_date: birthDate
    })
    return createdEmployee;

}


const getAllEmployee = async () => {
    const Employees = await Employee.findAll({
        include: [{
            model: Cpf,
            as: "CPF",
        }, {
            model: Department,
            as: "Department"
        }]
    });

    if (!Employees) {
        return new Error('No have Employees')
    }

    return Employees;
}

const getOneEmployee = async (id) => {
    const GetEmployee = await Employee.findByPk(id, {
        include: [{
            model: Cpf,
            as: "CPF",
        }, {
            model: Department,
            as: "Department"
        }]
    });

    if (!GetEmployee) {
        return new Error('Employee not found')
    }

    return GetEmployee;
}

module.exports = {
    createEmployee,
    getAllEmployee,
    getOneEmployee,
}