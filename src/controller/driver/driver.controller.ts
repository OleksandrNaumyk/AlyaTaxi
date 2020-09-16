import {NextFunction, Request, Response} from 'express';
import * as Joi from 'joi';

import {driverService} from '../../services';
import {newDriverValidator} from '../../validators';
import {hashPassword, tokinizer} from '../../helpers';
import {ActionEnum} from '../../constants';

class DriverController {
  async createDriver(req: Request, res: Response, next: NextFunction) {
    const driver = req.body;

    const {error} = Joi.validate(driver, newDriverValidator);

    if (error) {
      return next(new Error(error.details[0].message));
    }

    driver.password = await hashPassword(driver.password);

    const {_id} = await driverService.createDriver(driver);

    const {access_token} = tokinizer(ActionEnum.USER_REGISTER);

    await driverService.addActionToken(_id, {action: ActionEnum.USER_REGISTER, token: access_token});

    res.sendStatus(201);
  }

  confirmDriver(req: Request, res: Response, next: NextFunction) {
    res.end();
  }
}

export const driverController = new DriverController();
