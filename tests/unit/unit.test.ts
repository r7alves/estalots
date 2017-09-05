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

})
