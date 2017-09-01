"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./config/helpers");
describe('Testes de Integracao', () => {
    describe('GET /', () => {
        it('Deve retornar message Hello, world!', done => {
            helpers_1.request(helpers_1.app)
                .get('/')
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(200);
                helpers_1.expect(res.text).to.be.eql('Hello, world!');
                done(error);
            });
        });
    });
    describe('GET /ola/:nome', () => {
        it('Deve retornar a message Hello, TypeScript Course', done => {
            const nome = 'TypeScript Course';
            helpers_1.request(helpers_1.app)
                .get(`/ola/${nome}`)
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(200);
                helpers_1.expect(res.text).to.be.eql('Hello, TypeScript Course');
                done(error);
            });
        });
    });
    describe('GET /api/users/all', () => {
        it('Deve retornar um Json com todos os Usuários', done => {
            helpers_1.request(helpers_1.app)
                .get('/api/users/all')
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('GET /api/users/:id', () => {
        it('Deve retornar um Json com apenas um Usuário', done => {
            helpers_1.request(helpers_1.app)
                .get(`/api/users/${1}`)
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('POST /api/users/new', () => {
        it('Deve criar Usuário', done => {
            const user = {
                nome: 'Teste'
            };
            helpers_1.request(helpers_1.app)
                .post('/api/users/new')
                .send(user)
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('PUT /api/users/:id/edit', () => {
        it('Deve atualizar Usuário', done => {
            const user = {
                nome: 'TesteUpdate'
            };
            helpers_1.request(helpers_1.app)
                .put(`/api/users/${1}/edit`)
                .send(user)
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('DELETE /api/users/:id', () => {
        it('Deve deletar Usuário', done => {
            helpers_1.request(helpers_1.app)
                .delete(`/api/users/${1}`)
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
});
