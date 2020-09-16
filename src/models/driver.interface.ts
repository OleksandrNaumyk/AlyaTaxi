import {ActionEnum} from '../constants';

export interface DriverTokenInterface {
  token?: string,
  action?: ActionEnum
}

export interface DriverInterface {
  _id: string;
  name: string;
  surname: string;
  phone: string;
  password: string;
  age: number;
  status: string;
  photo_driver?: string;
  photo_car?: string;
  photo_doc_car?: string;
  photo_doc_driver?: string;
  car_model?: string;
  car_made?: string;
  car_color?: string;
  car_number?: string;
  rating?: string;
  date_add: string;
  city: string;
  tokens?: [DriverTokenInterface];
}

