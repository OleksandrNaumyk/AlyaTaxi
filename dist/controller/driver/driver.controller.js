"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverController = void 0;
const Joi = require("joi");
const services_1 = require("../../services");
const validators_1 = require("../../validators");
const helpers_1 = require("../../helpers");
class DriverController {
    async createDriver(req, res, next) {
        const driver = req.body;
        const { error } = Joi.validate(driver, validators_1.newDriverValidator);
        if (error) {
            return next(new Error(error.details[0].message));
        }
        driver.password = await helpers_1.hashPassword(driver.password);
        await services_1.driverService.createDriver(driver);
        res.sendStatus(201);
    }
}
exports.driverController = new DriverController();
//# sourceMappingURL=driver.controller.js.map