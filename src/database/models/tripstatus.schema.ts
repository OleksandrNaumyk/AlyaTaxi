import {Document, Model, model, Schema} from 'mongoose';
import {TripStatusInterface} from '../../models';

export type TripStatusType = TripStatusInterface & Document

export const TripStatusSchema: Schema = new Schema<TripStatusInterface>({
  trip_status_id: {
    type: String,
    required: true,
    unique: true
  },
  trip_status_name: {
    type: String,
    required: true
  }
});

export const TripStatusModel: Model<any> = model<TripStatusType>('tripstatus', TripStatusSchema);
