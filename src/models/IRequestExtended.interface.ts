import {UserInterface} from './user.interface';

export interface IExtentedRequest extends Request{
  user: UserInterface
}
