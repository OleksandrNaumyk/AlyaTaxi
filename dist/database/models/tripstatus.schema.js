"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripStatusModel = exports.TripStatusSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TripStatusSchema = new mongoose_1.Schema({
    trip_status_id: {
        type: String,
        required: true,
        unique: true
    },
    trip_status_name: {
        type: String,
        required: true
    }
});
exports.TripStatusModel = mongoose_1.model('tripstatus', exports.TripStatusSchema);
//# sourceMappingURL=tripstatus.schema.js.map