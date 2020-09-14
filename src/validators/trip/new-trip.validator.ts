import * as Joi from 'joi';

export const newTripValidator = Joi.object({
  start: Joi.number().integer().required(),
  finish: Joi.number().integer().required(),
  length: Joi.number().integer().required(),
  cost: Joi.number().integer(),
  commission: Joi.number().integer(),
  id_user: Joi.number().integer(),
  id_driver: Joi.number().integer(),
  comment: Joi.string().trim(),
  status_trip: Joi.number().integer(),
  date_start: Joi.string().trim(),
  date_finish: Joi.string().trim()
});
