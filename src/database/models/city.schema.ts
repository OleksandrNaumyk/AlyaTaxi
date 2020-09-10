import {Document, Model, model, Schema} from 'mongoose';
import {CityInterface} from '../../models';

export type CityType = CityInterface & Document

export const CitySchema: Schema = new Schema<CityInterface>({
  city: {
    type: String,
    required: true,
    unique: true
  }

});

export const CityModel: Model<any> = model<CityType>('city', CitySchema);
