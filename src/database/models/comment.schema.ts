import {Document, Model, model, Schema} from 'mongoose';
import {CommentInterface} from '../../models';

export type CommentType = CommentInterface & Document

export const CommentSchema: Schema = new Schema<CommentInterface>({
  comment: {
    type: String,
    required: true
  },
  date_comment: {
    type: Date,
    required: true,
    default: new Date().toISOString()
  },
  id_trip: {
    type: String,
    required: false
  }

});

export const CommentModel: Model<any> = model<CommentType>('comments', CommentSchema);
