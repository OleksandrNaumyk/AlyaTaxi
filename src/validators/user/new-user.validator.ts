import * as Joi from 'joi';

import {RegExpEnum} from '../../constants';

export const newUserValidator = Joi.object({
  name: Joi.string().trim().min(2).max(25).required(),
  surname: Joi.string().trim().min(2).max(50).required(),
  phone: Joi.string().trim().min(12).max(13).regex(RegExpEnum.phone).required(),
  password: Joi.string().trim().min(8).max(20).regex(RegExpEnum.password).required(),
  age: Joi.number().integer().min(1).max(120).required(),
  photo: Joi.string().trim(),
  rating: Joi.string().trim(),
  date_add: Joi.date().required(),
  status: Joi.string().trim().required(),
  city: Joi.string().trim().required()
});
