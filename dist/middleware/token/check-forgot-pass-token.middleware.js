"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkForgotTokenMiddleware = void 0;
const constants_1 = require("../../constants");
const errors_1 = require("../../errors");
const user_1 = require("../../services/user");
const helpers_1 = require("../../helpers");
exports.checkForgotTokenMiddleware = async (req, res, next) => {
    const token = req.get(constants_1.RequestHeadersEnum.AUTHORIZATION);
    if (!token) {
        return next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.BAD_REQUEST, errors_1.customErrors.BAD_REQUEST_NO_TOKEN.message));
    }
    const b = await helpers_1.tokenVerificator(constants_1.ActionEnum.FORGOT_PASSWORD, token);
    console.log(b);
    const userByToken = await user_1.userService.findUserByActionToken(constants_1.ActionEnum.FORGOT_PASSWORD, token);
    if (!userByToken) {
        return next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.BAD_REQUEST, errors_1.customErrors.NOT_FOUND.message));
    }
    req.user = userByToken;
    next();
};
//# sourceMappingURL=check-forgot-pass-token.middleware.js.map