"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsPhoneExistsMiddleware = void 0;
const services_1 = require("../../services");
const errors_1 = require("../../errors");
exports.checkIsPhoneExistsMiddleware = async (req, res, next) => {
    const { phone } = req.body;
    const userByPhone = await services_1.userService.findOneByParams({ phone });
    if (userByPhone) {
        return next(new errors_1.ErrorHandler(400, errors_1.customErrors.BAD_REQUEST_USER_REGISTERED.message, errors_1.customErrors.BAD_REQUEST_USER_REGISTERED.code));
    }
    next();
};
//# sourceMappingURL=check-is-phone-exists.middleware.js.map