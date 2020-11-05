"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripModel = exports.TripSchema = void 0;
const mongoose_1 = require("mongoose");
const constants_1 = require("../../constants");
const x = {
    type: String,
    required: true
};
const y = {
    type: String,
    required: true
};
exports.TripSchema = new mongoose_1.Schema({
    start: [x, y],
    finish: [x, y],
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
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: constants_1.TableNamesEnum.USER
    },
    driverId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: constants_1.TableNamesEnum.DRIVER
    },
    comment: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: false
    },
    status_trip: {
        type: Number,
        required: false,
        default: constants_1.StatusTripEnum.REGISTRATED
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
exports.TripModel = mongoose_1.model(constants_1.TableNamesEnum.TRIP, exports.TripSchema);
//# sourceMappingURL=trip.schema.js.map