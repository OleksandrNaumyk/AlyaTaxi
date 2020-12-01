import {Request} from 'express';

import {UserInterface} from './user.interface';
import {TripInterface} from './trip.interface';

export interface RequestExtendedInterface extends Request{
  user?: UserInterface;
  trip?: TripInterface;
}
