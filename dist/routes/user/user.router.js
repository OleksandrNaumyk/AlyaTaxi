"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const controller_1 = require("../../controller");
const router = express_1.Router();
router.post('/', controller_1.userController.createUser);
exports.userRouter = router;
//# sourceMappingURL=user.router.js.map