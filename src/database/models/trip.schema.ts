import {Document, Model, model, Schema} from 'mongoose';
import {TripInterface} from '../../models';
import {StatusTripEnum} from '../../constants';

export type TripType = TripInterface & Document

export const TripSchema: Schema = new Schema<TripInterface>({
  start: {
    type: String,
    required: true
  },
  finish: {
    type: String,
    required: true
  },
  length: {
    type: Number,
    required: true
  },
  cost: {
    type: Number,
    required: false
  },
  commission: {
    type: Number,
    required: false
  },
  id_user: {
    type: Number,
    required: false
  },
  id_driver: {
    type: Number,
    required: false
  },
  comment: {
    type: String,
    required: false
  },
  rating: {
    type: Number,
    required: false
  },
  status_trip: {
    type: Number,
    required: false,
    default: StatusTripEnum.REGISTRATED
  },
  date_start: {
    type: Date,
    required: false
  },
  date_finish: {
    type: Date,
    required: false
  }

});

export const TripModel: Model<any> = model<TripType>('trips', TripSchema);
