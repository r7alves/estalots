import * as HTTPStatus from 'http-status'
import { app, request, expect } from './config/helpers'

describe('Testes de Integracao', () => {

  'use strict'
  const config = require('../../server/config/env/config')
  const model = require('../server/models')

  let id
  let name
  let email

  const userTest = {
    id: 100,
    name: 'Usuario Teste',
    email: 'teste@email.com',
    password: 'teste'
  }

  const userDefault = {
    id : 1,
    name : 'Default User',
    email : 'defaul@email.com',
    password: 'default'
  }

  beforeEach((done)=>{
    model.User.destroy({
      where: {}
    })
    .then(()=>{
        return model.User.create(userDefault)
    })
    .then(user=>{
      model.User.create(userTest)
        .then(()=>{
          done()
        })
    })
  })

  describe('GET /api/users/all', () => {
    it('Deve retornar um Array com todos os Usuários', done => {
      request(app)
        .get('/api/users/all')
        .end((error, res) => {
          expect(res.status).to.equal(HTTPStatus.OK)
          expect(res.body.payload).to.be.an('array')
          expect(res.body.payload[0].name).to.be.equal(userDefault.name)
          expect(res.body.payload[0].email).to.be.equal(userDefault.email)
          done(error)
        })
    })
  })

  describe('GET /api/users/:id', () => {
    it('Deve retornar um Array com apenas um Usuário', done => {
      request(app)
        .get(`/api/users/${userDefault.id}`)
        .end((error, res) => {
          expect(res.status).to.equal(HTTPStatus.OK)
          expect(res.body.payload.id).to.equal(userDefault.id)
          expect(res.body.payload).to.have.all.keys([
            'id', 'name', 'email', 'password'
          ])
          id = res.body.payload.id
          done(error)
        })
    })
  })

  describe('POST /api/users/create', () => {
    it('Deve criar Usuário', done => {
      const user = {
        id: 2,
        name: 'Usuario Teste',
        email: 'usuario@email.com',
        password: 'novouser'
      }
      request(app)
        .post('/api/users/create')
        .send(user)
        .end((error, res) => {
          expect(res.status).to.equal(HTTPStatus.OK)
          expect(res.body.payload.id).to.eql(user.id)
          expect(res.body.payload.name).to.eql(user.name)
          expect(res.body.payload.email).to.eql(user.email)

          done(error)
        })
    })
  })

  describe('PUT /api/users/:id/update', () => {
      it('Deve atualizar um Usuário', done => {
        const user = {
          name: 'TesteUpdate',
          email: 'update@email.com'
        };
        request(app)
          .put(`/api/users/${userTest.id}/update`)
          .send(user)
          .end((error, res) => {
            expect(res.status).to.equal(HTTPStatus.OK)
            expect(res.body.payload.id).to.equal(userTest.id)
            expect(res.body.payload).to.have.all.keys([
              'id', 'name', 'email', 'password'
            ])
            name = res.body.payload.name
            email= res.body.payload.email
            done(error)
          })
      })
    })

  describe('DELETE /api/users/:id/destroy', () => {
    it('Deve deletar Usuário', done => {
      request(app)
        .del(`/api/users/${userTest.id}/destroy`)
        .end((error, res) => {
          expect(res.status).to.equal(HTTPStatus.OK)
          expect(res.body.payload.id).to.equal(userTest.id)
          expect(res.body.payload).to.have.all.keys([
            'id', 'name', 'email', 'password'
          ])
          id = res.body.payload.id

          done(error)
        })
    })
  })

})
