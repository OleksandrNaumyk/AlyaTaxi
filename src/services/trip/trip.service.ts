import {TripModel} from '../../database';
import {TripInterface} from '../../models';

class TripService {
  createTrip(trip: Partial<TripInterface>) {
    const tripToCreate = new TripModel(trip);

    return tripToCreate.save();
  }
}

export const tripService = new TripService();
