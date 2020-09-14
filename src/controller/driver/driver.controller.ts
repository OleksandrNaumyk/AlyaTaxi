import {NextFunction, Request, Response} from 'express';
import * as Joi from 'joi';

import {driverService} from '../../services';
import {newDriverValidator} from '../../validators';
import {hashPassword} from '../../helpers';

class DriverController {
  async createDriver(req: Request, res: Response, next: NextFunction) {
    const driver = req.body;

    const {error} = Joi.validate(driver, newDriverValidator);

    if (error) {
      return next(new Error(error.details[0].message));
    }

    driver.password = await hashPassword(driver.password);

    await driverService.createDriver(driver);

    res.sendStatus(201);
  }
}

export const driverController = new DriverController();
