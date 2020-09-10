import {NextFunction, Request, Response} from 'express';
import {tripService} from '../../services';

class TripController {
  async createTrip(req: Request, res: Response, next: NextFunction) {
    const trip = req.body;

    await tripService.createTrip(trip);

    res.sendStatus(201);
  }
}

export const tripController = new TripController();
