"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenVerificator = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const util_1 = require("util");
const constants_1 = require("../constants");
const config_1 = require("../config");
const errors_1 = require("../errors");
const verifyPromise = util_1.promisify(jsonwebtoken_1.verify);
exports.tokenVerificator = async (action, token) => {
    try {
        let isValid;
        switch (action) {
            case constants_1.ActionEnum.USER_AUTH:
                isValid = await verifyPromise(token, config_1.config.JWT_SECRET);
                break;
            case constants_1.ActionEnum.USER_REGISTER:
                isValid = await verifyPromise(token, config_1.config.JWT_CONFIRM_EMAIL_SECRET);
                break;
            case constants_1.ActionEnum.FORGOT_PASSWORD:
                isValid = await verifyPromise(token, config_1.config.JWT_PASS_RESET_SECRET);
                break;
            default:
                throw new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.SERVER, 'wrong Action type');
        }
        return isValid;
    }
    catch (e) {
        throw new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.UNAUTHORIZED, errors_1.customErrors.UNAUTHORIZER_BAD_TOKEN.message);
    }
};
//# sourceMappingURL=token-verificator.helper.js.map