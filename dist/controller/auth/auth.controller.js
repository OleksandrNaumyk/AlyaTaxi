"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const express_1 = require("express");
const helpers_1 = require("../../helpers");
const constants_1 = require("../../constants");
const services_1 = require("../../services");
const errors_1 = require("../../errors");
class AuthController {
    async authUser(req, res, next) {
        console.log('here');
        try {
            const { _id, password } = req.user;
            const authInfo = req.body;
            const isPasswordEquals = await helpers_1.comparePassword(authInfo.password, password);
            if (!isPasswordEquals) {
                return next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.NOT_FOUND, errors_1.customErrors.NOT_FOUND.message));
            }
            const { access_token, refresh_token } = helpers_1.tokinizer(constants_1.ActionEnum.USER_AUTH);
            await services_1.authService.createTokenPair({
                accessToken: access_token,
                refreshToken: refresh_token,
                userId: _id
            });
            res.json({ access_token, refresh_token });
        }
        catch (e) {
            return next(e);
        }
    }
    async logoutUser(req, res, next) {
        const accessToken = req.get(constants_1.RequestHeadersEnum.AUTHORIZATION);
        await services_1.authService.removeToken({ accessToken });
        express_1.response.sendStatus(constants_1.ResponseStatusCodesEnum.NO_CONTENT);
    }
}
exports.authController = new AuthController();
//# sourceMappingURL=auth.controller.js.map