"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverController = void 0;
const Joi = require("joi");
const services_1 = require("../../services");
const validators_1 = require("../../validators");
const helpers_1 = require("../../helpers");
const constants_1 = require("../../constants");
class DriverController {
    async createDriver(req, res, next) {
        const driver = req.body;
        const { error } = Joi.validate(driver, validators_1.newDriverValidator);
        if (error) {
            return next(new Error(error.details[0].message));
        }
        driver.password = await helpers_1.hashPassword(driver.password);
        const { _id } = await services_1.driverService.createDriver(driver);
        const { access_token } = helpers_1.tokinizer(constants_1.ActionEnum.USER_REGISTER);
        await services_1.driverService.addActionToken(_id, { action: constants_1.ActionEnum.USER_REGISTER, token: access_token });
        res.sendStatus(201);
    }
    confirmDriver(req, res, next) {
        res.end();
    }
}
exports.driverController = new DriverController();
//# sourceMappingURL=driver.controller.js.map