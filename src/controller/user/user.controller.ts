import {NextFunction, Request, Response} from 'express';
import * as Joi from 'joi';

import {userService} from '../../services';
import {newUserValidator} from '../../validators';

class UserController {
  async createUser(req: Request, res: Response, next: NextFunction) {
    const user = req.body;

    const {error} = Joi.validate(user, newUserValidator);

    if (error) {
      return next(new Error(error.details[0].message));
    }

    await userService.createUser(user);

    res.sendStatus(201);
  }
}

export const userController = new UserController();
