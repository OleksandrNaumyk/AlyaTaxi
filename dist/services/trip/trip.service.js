"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tripService = void 0;
const database_1 = require("../../database");
class TripService {
    createTrip(trip) {
        const tripToCreate = new database_1.TripModel(trip);
        return tripToCreate.save();
    }
}
exports.tripService = new TripService();
//# sourceMappingURL=trip.service.js.map