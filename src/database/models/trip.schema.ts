import {Document, Model, model, Schema} from 'mongoose';
import {TripInterface} from '../../models';
import {StatusTripEnum, TableNamesEnum} from '../../constants';

export type TripType = TripInterface & Document

const x = {
  type: String,
  required: true
};
const y = {
  type: String,
  required: true
};

export const TripSchema: Schema = new Schema<TripInterface>({
  start: [x, y],
  finish: [x, y],
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
  userId: {
    type: Schema.Types.ObjectId,
    ref: TableNamesEnum.USER
  },
  driverId: {
    type: Schema.Types.ObjectId,
    ref: TableNamesEnum.DRIVER
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

export const TripModel: Model<TripType> = model<TripType>(TableNamesEnum.TRIP, TripSchema);
