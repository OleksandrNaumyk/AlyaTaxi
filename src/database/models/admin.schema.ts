import {Document, Model, model, Schema} from 'mongoose';
import {AdminInterface} from '../../models';

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
  city_id: {
    type: Number,
    required: false
  }

});

export const AdminModel: Model<any> = model<AdminType>('admins', AdminSchema);
