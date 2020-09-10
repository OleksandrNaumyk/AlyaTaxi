"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverRouter = void 0;
const express_1 = require("express");
const controller_1 = require("../../controller");
const router = express_1.Router();
router.post('/', controller_1.driverController.createDriver);
exports.driverRouter = router;
//# sourceMappingURL=driver.router.js.map