"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsUserValidMiddleware = void 0;
const Joi = require("joi");
const user_1 = require("../../validators/user");
exports.checkIsUserValidMiddleware = (req, res, next) => {
    const { error } = Joi.validate(req.body, user_1.newUserValidator);
    if (error) {
        return next(new Error(error.details[0].message));
    }
    next();
};
//# sourceMappingURL=check-is-user-valid.middleware.js.map