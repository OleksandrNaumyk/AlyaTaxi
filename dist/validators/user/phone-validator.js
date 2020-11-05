"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneValidator = void 0;
const Joi = require("joi");
const constants_1 = require("../../constants");
exports.phoneValidator = Joi.object({
    phone: Joi.string().trim().min(12).max(13).regex(constants_1.RegExpEnum.phone).required()
});
//# sourceMappingURL=phone-validator.js.map