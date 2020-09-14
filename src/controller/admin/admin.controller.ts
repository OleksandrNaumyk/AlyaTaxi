import {NextFunction, Request, Response} from 'express';
import * as Joi from 'joi';

import {adminService} from '../../services';
import {newAdminValidator} from '../../validators';
import {hashPassword} from '../../helpers';

class AdminController {
  async createAdmin(req: Request, res: Response, next: NextFunction) {
    const admin = req.body;

    const {error} = Joi.validate(admin, newAdminValidator);

    if (error) {
      return next(new Error(error.details[0].message));
    }

    admin.password = await hashPassword(admin.password);

    await adminService.createAdmin(admin);

    res.sendStatus(201);
  }
}

export const adminController = new AdminController();
