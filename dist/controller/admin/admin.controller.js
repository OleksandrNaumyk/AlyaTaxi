"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const Joi = require("joi");
const services_1 = require("../../services");
const validators_1 = require("../../validators");
const helpers_1 = require("../../helpers");
class AdminController {
    async createAdmin(req, res, next) {
        const admin = req.body;
        const { error } = Joi.validate(admin, validators_1.newAdminValidator);
        if (error) {
            return next(new Error(error.details[0].message));
        }
        admin.password = await helpers_1.hashPassword(admin.password);
        await services_1.adminService.createAdmin(admin);
        res.sendStatus(201);
    }
}
exports.adminController = new AdminController();
//# sourceMappingURL=admin.controller.js.map