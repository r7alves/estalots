import { Request, Response} from 'express'
import UserController from './controller'

let userCtrl
class UserRoutes{
  constructor(){
    userCtrl = new UserController
  }

  index( req: Request, res: Response){
    return userCtrl.getAll(req, res)
  }
  create( req: Request, res: Response){
    return userCtrl.create(req, res)
  }
  findOne( req: Request, res: Response){
    return userCtrl.getById(req, res)
  }
  update( req: Request, res: Response){
    return userCtrl.update(req, res)
  }
  destroy( req: Request, res: Response){
    return userCtrl.delete(req, res)
  } 
}
export default UserRoutes
