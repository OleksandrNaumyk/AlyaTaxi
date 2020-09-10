"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverStatusModel = exports.DriverStatusSchema = void 0;
const mongoose_1 = require("mongoose");
exports.DriverStatusSchema = new mongoose_1.Schema({
    driverstatusid: {
        type: String,
        required: true,
        unique: true
    },
    rating: {
        type: String,
        required: true
    },
    counttrip: {
        type: Number,
        required: true,
        default: 1
    }
});
exports.DriverStatusModel = mongoose_1.model('driverstatus', exports.DriverStatusSchema);
//# sourceMappingURL=driverstatus.schema.js.map