import {Request} from 'express';

import {UserInterface} from './user.interface';

export interface RequestExtendedInterface extends Request{
  user?: UserInterface;
}
