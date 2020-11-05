"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singlePasswordValidator = void 0;
const Joi = require("joi");
const constants_1 = require("../../constants");
exports.singlePasswordValidator = Joi.object({
    password: Joi.string().trim().min(8).max(20).regex(constants_1.RegExpEnum.password).required()
});
//# sourceMappingURL=single-password.validator.js.map