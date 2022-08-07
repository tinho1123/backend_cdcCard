const { expect } = require('chai');
const sinon = require('sinon')
const service = require('../../../services/departmentServices');

describe('Testes isolados', () => {
describe('testando controller do department', () => {

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
            sinon.stub(service, 'getAllDepartments').resolves(mockDepartment)
        })
        afterEach(() => {
            service.getAllDepartments.restore();
        })
        it('Verifica se tudo é retornado', async () => {
            const getAll = await service.getAllDepartments();
            expect(getAll).to.equal(mockDepartment)
        })
    })

})

})