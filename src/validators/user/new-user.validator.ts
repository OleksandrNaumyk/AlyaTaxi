import * as Joi from 'joi';

export const newUserValidator = Joi.object({
  name: Joi.string().trim().min(2).max(25).required(),
  surname: Joi.string().trim().min(2).max(50).required(),
  phone: Joi.string().trim().min(12).max(13).required(),
  password: Joi.string().trim().min(8).max(20).required(),
  age: Joi.number().integer().min(1).max(120),
  photo: Joi.string().trim(),
  rating: Joi.string().trim(),
  date_add: Joi.date(),
  status: Joi.string().trim(),
  city: Joi.string().trim()
});
