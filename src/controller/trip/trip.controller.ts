import {NextFunction, Request, Response} from 'express';
import * as Joi from 'joi';

import {tripService} from '../../services';
import {newTripValidator} from '../../validators';

class TripController {
  async createTrip(req: Request, res: Response, next: NextFunction) {
    const trip = req.body;

    const {error} = Joi.validate(trip, newTripValidator);

    if (error) {
      return next(new Error(error.details[0].message));
    }

    await tripService.createTrip(trip);

    res.sendStatus(201);
  }
}

export const tripController = new TripController();
