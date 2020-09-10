import {Document, Model, model, Schema} from 'mongoose';
import {AdminInterface} from '../../models';
import {CityEnum, UserStatusEnum} from '../../constants';

export type AdminType = AdminInterface & Document

export const AdminSchema: Schema = new Schema<AdminInterface>({
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
  status: {
    type: String,
    required: true,
    default: UserStatusEnum.PENDING
  },
  city: {
    type: String,
    required: false,
    default: CityEnum.LVIV
  }

});

export const AdminModel: Model<any> = model<AdminType>('admins', AdminSchema);
