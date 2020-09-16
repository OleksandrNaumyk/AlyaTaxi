"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminService = void 0;
const database_1 = require("../../database");
const mongoose_1 = require("mongoose");
class AdminService {
    createAdmin(admin) {
        const adminToCreate = new database_1.AdminModel(admin);
        return adminToCreate.save();
    }
    addActionToken(id, tokenObject) {
        return database_1.AdminModel.update({ _id: mongoose_1.Types.ObjectId(id) }, {
            $push: {
                tokens: tokenObject
            }
        });
    }
    findOneByParams(findObject) {
        return database_1.AdminModel.findOne({ findObject });
    }
}
exports.adminService = new AdminService();
//# sourceMappingURL=admin.service.js.map