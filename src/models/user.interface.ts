import {ActionEnum} from '../constants';

export interface UserTokenInterface {
    token?: string,
    action?: ActionEnum
}

export interface UserInterface {
  _id: string;
  name: string;
  surname: string;
  phone: string;
  password: string;
  age: number;
  photo?: string;
  rating?: number;
  date_add: string;
  status: string;
  city: string;
  tokens?: [UserTokenInterface];
}
