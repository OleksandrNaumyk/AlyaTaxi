import * as Joi from 'joi';

import {RegExpEnum} from '../../constants';

export const phoneValidator = Joi.object({
  phone: Joi.string().trim().min(12).max(13).regex(RegExpEnum.phone).required()
});
