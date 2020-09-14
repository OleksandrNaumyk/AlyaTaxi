import {Document, Model, model, Schema} from 'mongoose';
import {UserInterface} from '../../models';
import {CityEnum, UserStatusEnum} from '../../constants';

export type UserType = UserInterface & Document

const tokenSubModel = {
  token: String,
  action: String
};

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
  status: {
    type: String,
    required: true,
    default: UserStatusEnum.PENDING
  },
  city: {
    type: String,
    required: true,
    default: CityEnum.LVIV
  },
  tokens: [tokenSubModel]

});

export const UserModel: Model<any> = model<UserType>('users', UserSchema);
