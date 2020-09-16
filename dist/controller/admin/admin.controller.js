"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const Joi = require("joi");
const services_1 = require("../../services");
const validators_1 = require("../../validators");
const helpers_1 = require("../../helpers");
const constants_1 = require("../../constants");
class AdminController {
    async createAdmin(req, res, next) {
        const admin = req.body;
        const { error } = Joi.validate(admin, validators_1.newAdminValidator);
        if (error) {
            return next(new Error(error.details[0].message));
        }
        admin.password = await helpers_1.hashPassword(admin.password);
        const { _id } = await services_1.adminService.createAdmin(admin);
        const { access_token } = helpers_1.tokinizer(constants_1.ActionEnum.USER_REGISTER);
        await services_1.adminService.addActionToken(_id, { action: constants_1.ActionEnum.USER_REGISTER, token: access_token });
        res.sendStatus(201);
    }
    confirmAdmin(req, res, next) {
        res.end();
    }
}
exports.adminController = new AdminController();
//# sourceMappingURL=admin.controller.js.map