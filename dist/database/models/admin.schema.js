"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModel = exports.AdminSchema = void 0;
const mongoose_1 = require("mongoose");
exports.AdminSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        required: false
    },
    city_id: {
        type: Number,
        required: false
    }
});
exports.AdminModel = mongoose_1.model('admins', exports.AdminSchema);
//# sourceMappingURL=admin.schema.js.map