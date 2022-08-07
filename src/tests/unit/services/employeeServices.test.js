const { expect } = require('chai');
const sinon = require('sinon')
const { employee: Employee } = require('../../../db/models');

describe('Testes isolados', () => {
describe('testando service do employees', () => {

    //Testando a busca por todos os funcionários

    describe('Fazendo a funcionalidade findAll', () => {
        const mockEmployee = [{
            "id": 1,
            "name": "Wellington Carvalho",
            "cpf_id": 1,
            "department_id": 7,
            "salary": "10.000",
            "birth_date": "10/09/1999",
            "createdAt": "2022-08-06T21:09:15.000Z",
            "updatedAt": "2022-08-06T21:09:15.000Z",
            "CPF": {
                "id": 1,
                "cpf": "135.303.657-00"
            },
            "Department": {
                "id": 7,
                "department": "TI"
            }
        }]
        beforeEach(() => {
            sinon.stub(Employee, 'findAll').resolves(mockEmployee)
        })
        afterEach(() => {
            Employee.findAll.restore();
        })
        it('Verifica se tudo é retornado', async () => {
            const getAll = await Employee.findAll();
            expect(getAll).to.equal(mockEmployee)
        })
    })

    //Testando a busca por um funcionário por id

    describe('Fazendo a funcionalidade findByPk', () => {
        const mockEmployee = {
            "id": 1,
            "name": "Wellington Carvalho",
            "cpf_id": 1,
            "department_id": 7,
            "salary": "10.000",
            "birth_date": "10/09/1999",
            "createdAt": "2022-08-06T21:09:15.000Z",
            "updatedAt": "2022-08-06T21:09:15.000Z",
            "CPF": {
                "id": 1,
                "cpf": "135.303.657-00"
            },
            "Department": {
                "id": 7,
                "department": "TI"
            }
        }
        beforeEach(() => {
            sinon.stub(Employee, 'findByPk').resolves(mockEmployee)
        })
        afterEach(() => {
            Employee.findByPk.restore();
        })
        it('Verifica se tudo é retornado', async () => {
            const getOne = await Employee.findByPk(1);
            expect(getOne).to.equal(mockEmployee)
        })
    })

    //Testando a criação de um funcionário
    describe('Fazendo a funcionalidade create', () => {
        const mockEmployee = {
            "id": 1,
            "name": "Wellington Carvalho",
            "cpf_id": 1,
            "department_id": 7,
            "salary": "10.000",
            "birth_date": "10/09/1999",
            "createdAt": "2022-08-06T21:09:15.000Z",
            "updatedAt": "2022-08-06T21:09:15.000Z",
            "CPF": {
                "id": 1,
                "cpf": "135.303.657-00"
            },
            "Department": {
                "id": 7,
                "department": "TI"
            }
        }
        beforeEach(() => {
            sinon.stub(Employee, 'create').resolves(mockEmployee)
        })
        afterEach(() => {
            Employee.create.restore();
        })

 
        it('Verifica se tudo é retornado', async () => {
           const informationDataReq = {
                name: 'Wellington CArvalho da Cunha Filho',
                cpf: '135.303.546-00',
                department: 'TI',
                salary: 'R$30.000',
                birthDate: '10/09/1999'
            }
            const createEmployee = await Employee.create(informationDataReq);
            expect(createEmployee).to.equal(mockEmployee)
        })
    })

    //Testando a atualização de um funcionário
    describe('Fazendo update', () => {
        const mockEmployee = {
            "id": 1,
            "name": "Wellington Carvalho",
            "cpf_id": 1,
            "department_id": 7,
            "salary": "20.000",
            "birth_date": "10/09/1999",
            "createdAt": "2022-08-06T21:09:15.000Z",
            "updatedAt": "2022-08-06T21:09:15.000Z",
            "CPF": {
                "id": 1,
                "cpf": "135.303.657-00"
            },
            "Department": {
                "id": 7,
                "department": "TI"
            }
        }
        beforeEach(() => {
            sinon.stub(Employee, 'findByPk').resolves(mockEmployee)
        })
        afterEach(() => {
            Employee.findByPk.restore();
        })

 
        it('Verifica se tudo é retornado', async () => {
           const informationDataReq = {
                name: 'Wellington CArvalho da Cunha Filho',
                cpf: '135.303.546-00',
                department: 'TI',
                salary: 'R$20.000',
                birthDate: '10/09/1999'
            }
            const updateEmployee = await Employee.findByPk(1);
            updateEmployee.name = informationDataReq.name
            updateEmployee.CPF.cpf = informationDataReq.cpf;
            updateEmployee.department_id = informationDataReq.department;
            updateEmployee.salary = informationDataReq.salary;
            updateEmployee.birth_date = informationDataReq.birthDate

            expect(updateEmployee).to.equal(mockEmployee)
        })
    })

})

})