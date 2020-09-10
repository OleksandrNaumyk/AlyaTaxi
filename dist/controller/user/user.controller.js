"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const services_1 = require("../../services");
class UserController {
    async createUser(req, res, next) {
        const user = req.body;
        await services_1.userService.createUser(user);
        res.sendStatus(201);
    }
}
exports.userController = new UserController();
//# sourceMappingURL=user.controller.js.map