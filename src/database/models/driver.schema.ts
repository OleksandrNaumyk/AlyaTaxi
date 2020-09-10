import {Document, Model, model, Schema} from 'mongoose';
import {DriverInterface} from '../../models';

export type DriverType = DriverInterface & Document

export const DriverSchema: Schema = new Schema<DriverInterface>({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  status: {
    type: Number,
    required: true,
    default: 1
  },
  photo_driver: {
    type: String,
    required: false
  },
  photo_car: {
    type: String,
    required: false
  },
  photo_doc_car: {
    type: String,
    required: false
  },
  photo_doc_driver: {
    type: String,
    required: false
  },
  car_model: {
    type: String,
    required: false
  },
  car_made: {
    type: String,
    required: false
  },
  car_color: {
    type: String,
    required: false
  },
  car_number: {
    type: String,
    required: false
  },
  rating: { //Рейтинг
    type: String,
    required: false
  },
  date_add: { //Дата реєстрації
    type: Date,
    required: true,
    default: Date.now
  },
  city_id: {
    type: Number,
    required: false
  }

});

export const DriverModel: Model<any> = model<DriverType>('drivers', DriverSchema);
