"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverService = void 0;
const database_1 = require("../../database");
class DriverService {
    createDriver(driver) {
        const driverToCreate = new database_1.DriverModel(driver);
        return driverToCreate.save();
    }
}
exports.driverService = new DriverService();
//# sourceMappingURL=driver.service.js.map