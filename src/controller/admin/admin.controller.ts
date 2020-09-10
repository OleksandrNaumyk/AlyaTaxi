import {NextFunction, Request, Response} from 'express';
import {adminService} from '../../services';

class AdminController {
  async createAdmin(req: Request, res: Response, next: NextFunction) {
    const admin = req.body;

    await adminService.createAdmin(admin);

    res.sendStatus(201);
  }
}

export const adminController = new AdminController();
