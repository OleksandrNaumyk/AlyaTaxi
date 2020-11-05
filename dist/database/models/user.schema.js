"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
const constants_1 = require("../../constants");
const tokenSubModel = {
    token: String,
    action: String
};
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
        default: new Date().toISOString()
    },
    status: {
        type: String,
        required: true,
        default: constants_1.UserStatusEnum.PENDING
    },
    city: {
        type: String,
        required: true,
        default: constants_1.CityEnum.LVIV
    },
    tokens: [tokenSubModel]
}, {
    timestamps: true
});
exports.UserModel = mongoose_1.model(constants_1.TableNamesEnum.USER, exports.UserSchema);
//# sourceMappingURL=user.schema.js.map