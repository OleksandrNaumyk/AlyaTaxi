"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const services_1 = require("../../services");
class AdminController {
    async createAdmin(req, res, next) {
        const admin = req.body;
        await services_1.adminService.createAdmin(admin);
        res.sendStatus(201);
    }
}
exports.adminController = new AdminController();
//# sourceMappingURL=admin.controller.js.map