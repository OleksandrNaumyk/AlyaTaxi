"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripModel = exports.TripSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TripSchema = new mongoose_1.Schema({
    start: {
        type: String,
        required: true
    },
    finish: {
        type: String,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: false
    },
    commission: {
        type: Number,
        required: false
    },
    id_user: {
        type: Number,
        required: false
    },
    id_driver: {
        type: Number,
        required: false
    },
    comment: {
        type: String,
        required: false
    },
    status_trip: {
        type: Number,
        required: false
    },
    date_start: {
        type: Date,
        required: false
    },
    date_finish: {
        type: Date,
        required: false
    }
});
exports.TripModel = mongoose_1.model('trips', exports.TripSchema);
//# sourceMappingURL=trip.schema.js.map