"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUserValidator = void 0;
const Joi = require("joi");
exports.newUserValidator = Joi.object({
    name: Joi.string().trim().min(2).max(25).required(),
    surname: Joi.string().trim().min(2).max(50).required(),
    phone: password,
    age: photo,
    rating: date_add,
    status_id: city_id
});
name: string;
surname: string;
phone: string;
password: string;
age: number;
photo ?  : string;
rating ?  : number;
date_add: string;
status_id: string;
city_id: string;
//# sourceMappingURL=new-user.validator.js.map