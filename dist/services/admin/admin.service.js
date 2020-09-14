"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminService = void 0;
const database_1 = require("../../database");
class AdminService {
    createAdmin(admin) {
        const adminToCreate = new database_1.AdminModel(admin);
        return adminToCreate.save();
    }
    findOneByParams(findObject) {
        return database_1.AdminModel.findOne({ findObject });
    }
}
exports.adminService = new AdminService();
//# sourceMappingURL=admin.service.js.map