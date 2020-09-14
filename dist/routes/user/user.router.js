"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const controller_1 = require("../../controller");
const middleware_1 = require("../../middleware");
const router = express_1.Router();
router.post('/', middleware_1.checkIsPhoneExistsMiddleware, controller_1.userController.createUser);
router.post('/confirm', controller_1.userController.confirmUser);
exports.userRouter = router;
//# sourceMappingURL=user.router.js.map