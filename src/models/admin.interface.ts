import {ActionEnum} from '../constants';

export interface AdminTokenInterface {
  token?: string,
  action?: ActionEnum
}

export interface AdminInterface {
  _id: string;
  name: string;
  surname: string;
  phone: string;
  password: string;
  age: number;
  photo?: string;
  city: string;
  tokens?: [AdminTokenInterface];
}
