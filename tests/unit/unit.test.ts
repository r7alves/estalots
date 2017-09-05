import { testDouble, expect } from './config/helpers'
import User from '../../server/modules/User/service'
//vai executar dentro dela
describe('Testes Unitários do Controller', () => {
  describe('Método Create', () => {
    it('Deve criar um novo usuario', () => {
      const novoUsuario = {
        id: 1,
        name: 'Novo User',
        email: 'novouser@email.com',
        password: '1234'
      }
 
      const user = new User()
      return user.create(novoUsuario)
        .then(data => {
          expect(data.dataValues).to.have.all.keys(
            ['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']
          )
        })

    })
  })
  // describe('Método Update', () => {
  //   it('Deve atualizar um usuario', () => {
  //     const usuarioUpdatedAt = {
  //       name: 'Nome Atualizado',
  //       email: 'atualizado@email.com'
  //     }
  //
  //     const user = new User()
  //     return user.update(1, usuarioUpdatedAt).then(data =>{
  //       expect(data[0].to.be.equal(1))
  //     })
  //
  //   })
  // })
  // describe('Método GET Users', () => {
  //   it('Deve retornar uma lista com todos os users', () => {
  //     const user = new User()
  //     return user.getAll().then(data =>{
  //       expect(data).to.be.an('array')
  //       expect(data[0]).to.have.all.keys(
  //         ['email', 'id','name', 'password']
  //       )
  //     })
  //   })
  // })
  // describe('Método Delete', () => {
  //   it('Deve deletar um usuario', () => {
  //     const user = new User()
  //     return user.delete(1).then(data =>{
  //       expect(data).to.be.equal(1)
  //     })
  //   })
  // })
  //
  // describe('Método getById', () => {
  //   it('Deve retornar um usuario de acordo com id passado', () => {
  //     const user = new User()
  //     return user.getById(1).then(data =>{
  //       expect(data).to.be.an('array')
  //       expect(data[0]).to.have.all.keys(
  //         ['email', 'id', 'name', 'password']
  //       )
  //     })
  //   })
  // })
  //
  // describe('Método getByEmail', () => {
  //   it('Deve retornar um usuario de acordo com email passado', () => {
  //     let email = 'usuario@email.com'
  //     const user = new User()
  //     return user.getByEmail(email).then(data =>{
  //       expect(data).to.be.an('array')
  //       expect(data[0]).to.have.all.keys(
  //         ['email', 'id', 'name', 'password']
  //       )
  //     })
  //   })
  // })

})
