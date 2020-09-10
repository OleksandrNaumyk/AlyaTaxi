"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
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
    rating: {
        type: String,
        required: false
    },
    date_add: {
        type: Date,
        default: Date.now
    },
    status_id: {
        type: Number,
        required: true
    },
    city_id: {
        type: Number,
        required: true
    }
});
exports.UserModel = mongoose_1.model('users', exports.UserSchema);
//# sourceMappingURL=user.schema.js.map