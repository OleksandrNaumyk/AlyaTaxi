"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAccessTokenMiddleware = void 0;
const constants_1 = require("../../constants");
const errors_1 = require("../../errors");
const helpers_1 = require("../../helpers");
const auth_1 = require("../../services/auth");
exports.checkAccessTokenMiddleware = async (req, res, next) => {
    const token = req.get(constants_1.RequestHeadersEnum.AUTHORIZATION);
    if (!token) {
        return next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.BAD_REQUEST, errors_1.customErrors.BAD_REQUEST_NO_TOKEN.message));
    }
    const xxx = await helpers_1.tokenVerificator(constants_1.ActionEnum.USER_AUTH, token);
    console.log(xxx);
    const userByToken = await auth_1.authService.findUserByToken({ accessToken: token });
    if (!userByToken) {
        return next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.BAD_REQUEST, errors_1.customErrors.NOT_FOUND.message));
    }
    req.user = userByToken;
    next();
};
//# sourceMappingURL=check-access-token.middleware.js.map