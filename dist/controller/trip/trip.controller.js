"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tripController = void 0;
const services_1 = require("../../services");
const constants_1 = require("../../constants");
class TripController {
    async createTrip(req, res, next) {
        try {
            const { _id } = req.user;
            const trip = req.body;
            const newTrip = await services_1.tripService.createTrip({ ...trip, userId: _id });
            await services_1.logService.createLog({
                userId: _id,
                event: constants_1.LogEnum.TRIP_CREATED,
                data: {
                    tripId: newTrip._id,
                    driverId: newTrip.driverId
                }
            });
            res.json(newTrip);
        }
        catch (e) {
            next(e);
        }
    }
}
exports.tripController = new TripController();
//# sourceMappingURL=trip.controller.js.map