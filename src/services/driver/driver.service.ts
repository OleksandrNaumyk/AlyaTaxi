import {DriverModel} from '../../database';
import {DriverInterface, DriverTokenInterface} from '../../models';
import {Types} from 'mongoose';

class DriverService {
  createDriver(driver: Partial<DriverInterface>) {
    const driverToCreate = new DriverModel(driver);

    return driverToCreate.save();
  }
  addActionToken(id: string, tokenObject: DriverTokenInterface): Promise<DriverInterface> {
    return DriverModel.update(
      {_id: Types.ObjectId(id)},
      {
        $push: {
          tokens: tokenObject as any
        }
      }) as any;
  }
  findOneByParams(findObject: Partial<DriverInterface>) {
    return DriverModel.findOne({findObject});
  }
}

export const driverService = new DriverService();
