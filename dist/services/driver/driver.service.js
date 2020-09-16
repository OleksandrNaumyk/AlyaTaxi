"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverService = void 0;
const database_1 = require("../../database");
const mongoose_1 = require("mongoose");
class DriverService {
    createDriver(driver) {
        const driverToCreate = new database_1.DriverModel(driver);
        return driverToCreate.save();
    }
    addActionToken(id, tokenObject) {
        return database_1.DriverModel.update({ _id: mongoose_1.Types.ObjectId(id) }, {
            $push: {
                tokens: tokenObject
            }
        });
    }
    findOneByParams(findObject) {
        return database_1.DriverModel.findOne({ findObject });
    }
}
exports.driverService = new DriverService();
//# sourceMappingURL=driver.service.js.map