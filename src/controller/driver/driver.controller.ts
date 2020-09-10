import {NextFunction, Request, Response} from 'express';
import {driverService} from '../../services';

class DriverController {
  async createDriver(req: Request, res: Response, next: NextFunction) {
    const driver = req.body;

    await driverService.createDriver(driver);

    res.sendStatus(201);
  }
}

export const driverController = new DriverController();
