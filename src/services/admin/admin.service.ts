import {AdminModel} from '../../database';
import {AdminInterface, AdminTokenInterface} from '../../models';
import {Types} from 'mongoose';

class AdminService {
  createAdmin(admin: Partial<AdminInterface>) {
    const adminToCreate = new AdminModel(admin);

    return adminToCreate.save();
  }
  addActionToken(id: string, tokenObject: AdminTokenInterface): Promise<AdminInterface> {
    return AdminModel.update(
      {_id: Types.ObjectId(id)},
      {
        $push: {
          tokens: tokenObject as any
        }
      }) as any;
  }
  findOneByParams(findObject: Partial<AdminInterface>) {
    return AdminModel.findOne({findObject});
  }
}

export const adminService = new AdminService();
