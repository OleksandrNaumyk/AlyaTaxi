"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUserValidator = void 0;
const Joi = require("joi");
const constants_1 = require("../../constants");
exports.newUserValidator = Joi.object({
    name: Joi.string().trim().min(2).max(25).required(),
    surname: Joi.string().trim().min(2).max(50).required(),
    phone: Joi.string().trim().min(12).max(13).regex(constants_1.RegExpEnum.phone).required(),
    password: Joi.string().trim().min(8).max(20).regex(constants_1.RegExpEnum.password).required(),
    age: Joi.number().integer().min(1).max(120).required(),
    photo: Joi.string().trim(),
    rating: Joi.string().trim(),
    date_add: Joi.date().required(),
    status: Joi.string().trim().required(),
    city: Joi.string().trim().required()
});
//# sourceMappingURL=new-user.validator.js.map