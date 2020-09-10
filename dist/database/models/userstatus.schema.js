"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatusModel = exports.UserStatusSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserStatusSchema = new mongoose_1.Schema({
    userstatusid: {
        type: String,
        required: true,
        unique: true
    },
    statusname: {
        type: String,
        required: true
    }
});
exports.UserStatusModel = mongoose_1.model('userstatus', exports.UserStatusSchema);
//# sourceMappingURL=userstatus.schema.js.map