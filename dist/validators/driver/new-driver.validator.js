"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newDriverValidator = void 0;
const Joi = require("joi");
const constants_1 = require("../../constants");
exports.newDriverValidator = Joi.object({
    name: Joi.string().trim().min(2).max(25).required(),
    surname: Joi.string().trim().min(2).max(50).required(),
    phone: Joi.string().trim().min(12).max(13).regex(constants_1.RegExpEnum.phone).required(),
    password: Joi.string().trim().min(8).max(20).regex(constants_1.RegExpEnum.password).required(),
    age: Joi.number().integer().min(1).max(120).required(),
    status: Joi.string().trim().required(),
    photo_driver: Joi.string().trim(),
    photo_car: Joi.string().trim(),
    photo_doc_car: Joi.string().trim(),
    photo_doc_driver: Joi.string().trim(),
    car_model: Joi.string().trim(),
    car_made: Joi.string().trim(),
    car_color: Joi.string().trim(),
    car_number: Joi.string().trim(),
    rating: Joi.string().trim(),
    date_add: Joi.date().required(),
    city: Joi.string().trim().required()
});
//# sourceMappingURL=new-driver.validator.js.map