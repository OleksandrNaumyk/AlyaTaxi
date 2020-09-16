"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverRouter = void 0;
const express_1 = require("express");
const controller_1 = require("../../controller");
const user_1 = require("../../middleware/user");
const router = express_1.Router();
router.post('/', user_1.checkIsPhoneExistsMiddleware, controller_1.driverController.createDriver);
router.post('/confirm', controller_1.driverController.confirmDriver);
exports.driverRouter = router;
//# sourceMappingURL=driver.router.js.map