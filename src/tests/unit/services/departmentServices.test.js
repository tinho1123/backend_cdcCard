const { expect } = require('chai');
const sinon = require('sinon')
const { department: Department } = require('../../../db/models');

describe('Testes isolados', () => {
describe('testando service do department', () => {

    //Testando a busca por todos os funcionários

    describe('Fazendo a funcionalidade findAll', () => {
        const mockDepartment = [
            {
                "id": 1,
                "department": "Administrativo"
            },
            {
                "id": 2,
                "department": "Financeiro"
            },
            {
                "id": 3,
                "department": "Recursos Humanos"
            },
            {
                "id": 4,
                "department": "Setor comercial"
            },
            {
                "id": 5,
                "department": "Setor jurídico"
            },
            {
                "id": 6,
                "department": "Setor operacional"
            },
            {
                "id": 7,
                "department": "TI"
            }
        ]
        beforeEach(() => {
            sinon.stub(Department, 'findAll').resolves(mockDepartment)
        })
        afterEach(() => {
            Department.findAll.restore();
        })
        it('Verifica se tudo é retornado', async () => {
            const getAll = await Department.findAll();
            expect(getAll).to.equal(mockDepartment)
        })
    })

})

})