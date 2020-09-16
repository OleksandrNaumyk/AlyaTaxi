import {NextFunction, Request, Response} from 'express';
import * as Joi from 'joi';

import {adminService} from '../../services';
import {newAdminValidator} from '../../validators';
import {hashPassword, tokinizer} from '../../helpers';
import {ActionEnum} from '../../constants';

class AdminController {
  async createAdmin(req: Request, res: Response, next: NextFunction) {
    const admin = req.body;

    const {error} = Joi.validate(admin, newAdminValidator);

    if (error) {
      return next(new Error(error.details[0].message));
    }

    admin.password = await hashPassword(admin.password);

    const {_id} = await adminService.createAdmin(admin);

    const {access_token} = tokinizer(ActionEnum.USER_REGISTER);

    await adminService.addActionToken(_id, {action: ActionEnum.USER_REGISTER, token: access_token});

    res.sendStatus(201);
  }

  confirmAdmin(req: Request, res: Response, next: NextFunction) {
    res.end();
  }
}

export const adminController = new AdminController();
