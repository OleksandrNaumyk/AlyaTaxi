"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = require("express");
const controller_1 = require("../../controller");
const user_1 = require("../../middleware/user");
const router = express_1.Router();
router.post('/', user_1.checkIsPhoneExistsMiddleware, controller_1.adminController.createAdmin);
exports.adminRouter = router;
//# sourceMappingURL=admin.router.js.map