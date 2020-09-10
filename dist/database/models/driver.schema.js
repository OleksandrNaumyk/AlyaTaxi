"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverModel = exports.DriverSchema = void 0;
const mongoose_1 = require("mongoose");
exports.DriverSchema = new mongoose_1.Schema({
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
    status: {
        type: Number,
        required: true,
        default: 1
    },
    photo_driver: {
        type: String,
        required: false
    },
    photo_car: {
        type: String,
        required: false
    },
    photo_doc_car: {
        type: String,
        required: false
    },
    photo_doc_driver: {
        type: String,
        required: false
    },
    car_model: {
        type: String,
        required: false
    },
    car_made: {
        type: String,
        required: false
    },
    car_color: {
        type: String,
        required: false
    },
    car_number: {
        type: String,
        required: false
    },
    rating: {
        type: String,
        required: false
    },
    date_add: {
        type: Date,
        required: true,
        default: Date.now
    },
    city_id: {
        type: Number,
        required: false
    }
});
exports.DriverModel = mongoose_1.model('drivers', exports.DriverSchema);
//# sourceMappingURL=driver.schema.js.map