import {Document, Model, model, Schema} from 'mongoose';

import {AccessTokenInterface} from '../../models';
import {TableNamesEnum} from '../../constants';

export type AccessTokenType = AccessTokenInterface & Document

export const AccessTokenSchema: Schema = new Schema<AccessTokenInterface>({
  accessToken: {
    type: String,
    required: true
  },
  refreshToken: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: TableNamesEnum.USER
  },
  createdAt: {
    type: String,
    required: true
  }
},
{
  timestamps: true
}
);

export const AccessTokenModel: Model<AccessTokenType> = model<AccessTokenType>(TableNamesEnum.ACCESS_TOKEN, AccessTokenSchema);
