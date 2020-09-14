import {DriverModel} from '../../database';
import {DriverInterface} from '../../models';

class DriverService {
  createDriver(driver: Partial<DriverInterface>) {
    const driverToCreate = new DriverModel(driver);

    return driverToCreate.save();
  }
  findOneByParams(findObject: Partial<DriverInterface>) {
    return DriverModel.findOne({findObject});
  }
}

export const driverService = new DriverService();
