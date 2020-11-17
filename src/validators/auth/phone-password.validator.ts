import * as Joi from 'joi';

import {RegExpEnum} from '../../constants';

export const phonePasswordValidator = Joi.object({
  phone: Joi.string().trim().min(12).max(13).regex(RegExpEnum.phone).required(),
  password: Joi.string().trim().min(8).max(20).regex(RegExpEnum.password).required()
});
