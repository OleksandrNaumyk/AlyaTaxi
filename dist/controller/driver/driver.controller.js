"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverController = void 0;
const services_1 = require("../../services");
class DriverController {
    async createDriver(req, res, next) {
        const driver = req.body;
        await services_1.driverService.createDriver(driver);
        res.sendStatus(201);
    }
}
exports.driverController = new DriverController();
//# sourceMappingURL=driver.controller.js.map