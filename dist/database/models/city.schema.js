"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityModel = exports.CitySchema = void 0;
const mongoose_1 = require("mongoose");
exports.CitySchema = new mongoose_1.Schema({
    city: {
        type: String,
        required: true,
        unique: true
    }
});
exports.CityModel = mongoose_1.model('city', exports.CitySchema);
//# sourceMappingURL=city.schema.js.map