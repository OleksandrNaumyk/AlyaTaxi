"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tripController = void 0;
const services_1 = require("../../services");
class TripController {
    async createTrip(req, res, next) {
        const trip = req.body;
        await services_1.tripService.createTrip(trip);
        res.sendStatus(201);
    }
}
exports.tripController = new TripController();
//# sourceMappingURL=trip.controller.js.map