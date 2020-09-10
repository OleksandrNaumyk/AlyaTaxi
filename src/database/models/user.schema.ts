import {Document, Model, model, Schema} from 'mongoose';
import {UserInterface} from '../../models';

export type UserType = UserInterface & Document

export const UserSchema: Schema = new Schema<UserInterface>({
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
  photo: {
    type: String,
    required: false
  },
  rating: { //Рейтинг
    type: String,
    required: false
  },
  date_add: { //Дата реєстрації
    type: Date,
    default: Date.now
  },
  status_id: {
    type: Number,
    required: true
  },
  city_id: {
    type: Number,
    required: true
  }

});

export const UserModel: Model<any> = model<UserType>('users', UserSchema);
