import {Document, Model, model, Schema} from 'mongoose';
import {LogInterface} from '../../models';
import {TableNamesEnum} from '../../constants';

export type LogType = LogInterface & Document

export const LogSchema: Schema = new Schema<LogInterface>({
  event: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  data: Schema.Types.Mixed
},{
  timestamps: true
});

export const LogModel: Model<LogType> = model<LogType>(TableNamesEnum.LOGS, LogSchema);
