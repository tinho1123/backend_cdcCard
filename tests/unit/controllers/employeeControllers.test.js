const { expect } = require('chai');
const sinon = require('sinon')
const service = require('../../../services/employeeServices');

describe('Testes isolados', () => {
describe('testando controller do employees', () => {

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
            sinon.stub(service, 'getAllEmployee').resolves(mockEmployee)
        })
        afterEach(() => {
            service.getAllEmployee.restore();
        })
        it('Verifica se tudo é retornado', async () => {
            const getAll = await service.getAllEmployee();
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
            sinon.stub(service, 'getOneEmployee').resolves(mockEmployee)
        })
        afterEach(() => {
            service.getOneEmployee.restore();
        })
        it('Verifica se tudo é retornado', async () => {
            const getOne = await service.getOneEmployee(1);
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
            sinon.stub(service, 'createEmployee').resolves(mockEmployee)
        })
        afterEach(() => {
            service.createEmployee.restore();
        })

 
        it('Verifica se tudo é retornado', async () => {
           const informationDataReq = {
                name: 'Wellington CArvalho da Cunha Filho',
                cpf: '135.303.546-00',
                department: 'TI',
                salary: 'R$30.000',
                birthDate: '10/09/1999'
            }
            const createEmployee = await service.createEmployee(informationDataReq);
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
            sinon.stub(service, 'updateEmployee').resolves(mockEmployee)
        })
        afterEach(() => {
            service.updateEmployee.restore();
        })

 
        it('Verifica se tudo é retornado', async () => {
           const informationDataReq = {
                name: 'Wellington CArvalho da Cunha Filho',
                cpf: '135.303.546-00',
                department: 'TI',
                salary: 'R$20.000',
                birthDate: '10/09/1999'
            }
            const updateEmployee = await service.updateEmployee(1, informationDataReq);

            expect(updateEmployee).to.equal(mockEmployee)
        })
    })

})

})