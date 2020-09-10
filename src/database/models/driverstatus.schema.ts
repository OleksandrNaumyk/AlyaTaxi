import {Document, Model, model, Schema} from 'mongoose';
import {DriverStatusInterface} from '../../models';

export type DriverStatusType = DriverStatusInterface & Document

export const DriverStatusSchema: Schema = new Schema<DriverStatusInterface>({
  driverstatusid: {
    type: String,
    required: true,
    unique: true
  },
  rating: {
    type: String,
    required: true
  },
  counttrip: {
    type: Number,
    required: true,
    default: 1
  }

});

export const DriverStatusModel: Model<any> = model<DriverStatusType>('driverstatus', DriverStatusSchema);
