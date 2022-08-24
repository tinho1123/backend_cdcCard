const { expect } = require('chai');
const request = require('supertest');
const app = require('../../server');

describe('Testes de integração', ()=> {
    describe('Testando Employee', () => {
        it('Testando se é possivel criar um funcionário', () => {
            const response = request(app).post('/api/employee').send({
                name: "Wellington Carvalho da Cunha Filho",
                cpf: "000.000.000-00",
                department: "TI",
                salary: "30.000",
                birthDate: "10/09/1999"
            })

            console.log(response.ok);

        })
    })
})