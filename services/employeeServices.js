const { employee: Employee, department: Department, cpf: Cpf } = require('../db/models')

const createEmployee = async ({ name, birthDate, salary, cpf, department  }) => {

    const createdCpf = await Cpf.create({ cpf })
    const createdEmployee = await Employee.create({ 
        name,
        cpf_id: createdCpf.id,
        department_id: department,
        salary,
        birth_date: birthDate
    })

    const getEmployee = await Employee.findByPk(createdEmployee.id, {
        include: [{
            model: Cpf,
            as: "CPF",
        }, {
            model: Department,
            as: "Department"
        }]
    });
    return getEmployee;

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

const updateEmployee = async (id, { name, cpf, department, salary, birthDate }) => {
    let GetEmployee = await getOneEmployee(id)

    if (!GetEmployee) {
        return new Error('Employee not found')
    }
    
    GetEmployee.name = name
    GetEmployee.CPF.cpf = cpf;
    GetEmployee.department_id = department;
    GetEmployee.salary = salary;
    GetEmployee.birth_date = birthDate

    await GetEmployee.CPF.save();
    await GetEmployee.save();

    GetEmployee = await getOneEmployee(id)
    return GetEmployee;
}

const deleteEmployee = async (id) => {
    const getEmployee = await Employee.findByPk(id);
    await Cpf.destroy({ where: { id: getEmployee.cpf_id }})
    await getEmployee.destroy()

    if (!getEmployee) {
        return new Error('Employee not found')
    }

    return { deleted: true };
}

module.exports = {
    createEmployee,
    getAllEmployee,
    getOneEmployee,
    updateEmployee,
    deleteEmployee
}