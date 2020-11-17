"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phonePasswordValidator = void 0;
const Joi = require("joi");
const constants_1 = require("../../constants");
exports.phonePasswordValidator = Joi.object({
    phone: Joi.string().trim().min(12).max(13).regex(constants_1.RegExpEnum.phone).required(),
    password: Joi.string().trim().min(8).max(20).regex(constants_1.RegExpEnum.password).required()
});
//# sourceMappingURL=phone-password.validator.js.map