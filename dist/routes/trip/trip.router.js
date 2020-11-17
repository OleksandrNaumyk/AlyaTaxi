"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tripRouter = void 0;
const express_1 = require("express");
const controller_1 = require("../../controller");
const auth_1 = require("../../middleware/auth");
const validators_1 = require("../../middleware/validators");
const router = express_1.Router();
router.post('/', auth_1.checkAccessTokenMiddleware, validators_1.newTripValidatorMiddleware, controller_1.tripController.createTrip);
exports.tripRouter = router;
//# sourceMappingURL=trip.router.js.map