"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_1 = require("../../controller/auth");
const user_1 = require("../../middleware/user");
const validators_1 = require("../../middleware/validators");
const auth_2 = require("../../middleware/auth");
const router = express_1.Router();
router.post('/', validators_1.phoneValidatorMiddleware, user_1.checkIsUserExistByPhoneMiddleware, auth_1.authController.authUser);
router.post('/logout', auth_2.checkAccessTokenMiddleware, auth_1.authController.logoutUser);
exports.authRouter = router;
//# sourceMappingURL=auth.router.js.map