"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
var service_1 = require("../../server/modules/User/service");
//vai executar dentro dela
describe('Testes Unitários do Controller', function () {
    describe('Método Create', function () {
        it('Deve criar um novo usuario', function () {
            var novoUser = {
                id: 1,
                name: 'Novo User',
                email: 'novouser@email.com',
                password: '1234'
            };
            var user = new service_1.default();
            return user.create(novoUser)
                .then(function (data) {
                helpers_1.expect(data.dataValues).to.have.all.keys(['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']);
            });
        });
    });
    // describe('Método Update', () => {
    //   it('Deve atualizar um usuario', () => {
    //
    //   })
    // })
    // describe('Método GET Users', () => {
    //   it('Deve retornar uma lista com todos os users', () => {
    //
    //   })
    // })
    // describe('Método Delete', () => {
    //   it('Deve deletar um usuario', () => {
    //
    //   })
    // })
});
