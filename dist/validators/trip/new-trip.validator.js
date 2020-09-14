"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newTripValidator = void 0;
const Joi = require("joi");
exports.newTripValidator = Joi.object({
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
//# sourceMappingURL=new-trip.validator.js.map