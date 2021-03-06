"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phonePasswordValidatorMiddleware = void 0;
const Joi = require("joi");
const validators_1 = require("../../validators");
const errors_1 = require("../../errors");
const constants_1 = require("../../constants");
exports.phonePasswordValidatorMiddleware = (req, res, next) => {
    const { error } = Joi.validate(req.body, validators_1.phonePasswordValidator);
    if (error) {
        return next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.BAD_REQUEST, error.details[0].message));
    }
    next();
};
//# sourceMappingURL=phone-password-validator.middleware.js.map