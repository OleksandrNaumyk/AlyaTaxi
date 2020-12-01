"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsUserExistByPhoneMiddleware = void 0;
const constants_1 = require("../../constants");
const errors_1 = require("../../errors");
const services_1 = require("../../services");
exports.checkIsUserExistByPhoneMiddleware = async (req, res, next) => {
    const { phone } = req.body;
    const userByPhone = await services_1.userService.findOneByParams({ phone });
    if (!userByPhone) {
        return next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.NOT_FOUND, errors_1.customErrors.NOT_FOUND.message));
    }
    req.user = userByPhone;
    next();
};
//# sourceMappingURL=check-is-user-exist-by-phone.middleware.js.map