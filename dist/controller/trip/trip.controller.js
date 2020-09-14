"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tripController = void 0;
const Joi = require("joi");
const services_1 = require("../../services");
const validators_1 = require("../../validators");
class TripController {
    async createTrip(req, res, next) {
        const trip = req.body;
        const { error } = Joi.validate(trip, validators_1.newTripValidator);
        if (error) {
            return next(new Error(error.details[0].message));
        }
        await services_1.tripService.createTrip(trip);
        res.sendStatus(201);
    }
}
exports.tripController = new TripController();
//# sourceMappingURL=trip.controller.js.map