import * as Joi from 'joi';

import {RegExpEnum} from '../../constants';

export const singlePasswordValidator = Joi.object({
  password: Joi.string().trim().min(8).max(20).regex(RegExpEnum.password).required()
});
