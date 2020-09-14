"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const mongoose_1 = require("mongoose");
const database_1 = require("../../database");
class UserService {
    createUser(user) {
        const userToCreate = new database_1.UserModel(user);
        return userToCreate.save();
    }
    addActionToken(id, tokenObject) {
        return database_1.UserModel.aggregate([
            {
                $match: {
                    _id: mongoose_1.Types.ObjectId(id)
                }
            }
        ]);
    }
    findOneByParams(findObject) {
        return database_1.UserModel.findOne({ findObject });
    }
}
exports.userService = new UserService();
//# sourceMappingURL=user.service.js.map