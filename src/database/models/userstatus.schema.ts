import {Document, Model, model, Schema} from 'mongoose';
import {UserStatusInterface} from '../../models';

export type UserStatusType = UserStatusInterface & Document

export const UserStatusSchema: Schema = new Schema<UserStatusInterface>({
  userstatusid: {
    type: String,
    required: true,
    unique: true
  },
  statusname: {
    type: String,
    required: true
  }

});

export const UserStatusModel: Model<any> = model<UserStatusType>('userstatus', UserStatusSchema);
