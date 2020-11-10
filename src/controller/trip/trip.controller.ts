import {NextFunction, Response} from 'express';

import {logService, tripService} from '../../services';
import {RequestExtendedInterface, UserInterface} from '../../models';
import {LogEnum} from '../../constants';

class TripController {
  async createTrip(req: RequestExtendedInterface, res: Response, next: NextFunction) {

    try {
      const {_id} = req.user as UserInterface;
      const trip = req.body;

      const newTrip = await tripService.createTrip({...trip, userId: _id});

      await logService.createLog({
        userId: _id,
        event: LogEnum.TRIP_CREATED,
        data: {
          tripId: newTrip._id,
          driverId: newTrip.driverId
        }
      });

      res.json(newTrip);
    }
    catch (e) {
      next(e);
    }
  }
}

export const tripController = new TripController();
