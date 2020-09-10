"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const Joi = require("joi");
const services_1 = require("../../services");
const validators_1 = require("../../validators");
class UserController {
    async createUser(req, res, next) {
        const user = req.body;
        const { error } = Joi.validate(user, validators_1.newUserValidator);
        if (error) {
            return next(new Error(error.details[0].message));
        }
        await services_1.userService.createUser(user);
        res.sendStatus(201);
    }
}
exports.userController = new UserController();
//# sourceMappingURL=user.controller.js.map