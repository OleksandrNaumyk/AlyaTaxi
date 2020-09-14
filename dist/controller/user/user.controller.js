"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const Joi = require("joi");
const helpers_1 = require("../../helpers");
const services_1 = require("../../services");
const validators_1 = require("../../validators");
class UserController {
    async createUser(req, res, next) {
        const user = req.body;
        const { error } = Joi.validate(user, validators_1.newUserValidator);
        if (error) {
            return next(new Error(error.details[0].message));
        }
        user.password = await helpers_1.hashPassword(user.password);
        await services_1.userService.createUser(user);
        //   const {access_token} = tokinizer(ActionEnum.USER_REGISTER);
        res.sendStatus(201);
    }
    confirmUser(req, res, next) {
        res.end();
    }
}
exports.userController = new UserController();
//# sourceMappingURL=user.controller.js.map