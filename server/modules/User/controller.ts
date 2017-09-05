import {Request, Response} from 'express'
import * as HTTPStatus from 'http-status'

class UserController {

  constructor(){}

  getAll(req: Request, res: Response){
    res.status(HTTPStatus.OK).json({
      message: 'OK'
    })
  }

  create(req: Request, res: Response){
    res.status(HTTPStatus.OK).json({
      message:'OK'
    })
  }

  getById(req: Request, res: Response){
    res.status(HTTPStatus.OK).json({
      message:'OK'
    })
  }

  update(req: Request, res: Response){
    res.status(HTTPStatus.OK).json({
      message:'OK'
    })
  }

  delete(req: Request, res: Response){
    res.status(HTTPStatus.OK).json({
      message:'OK'
    })
  }
}

export default UserController
