import {AdminModel} from '../../database';
import {AdminInterface} from '../../models';

class AdminService {
  createAdmin(admin: Partial<AdminInterface>) {
    const adminToCreate = new AdminModel(admin);

    return adminToCreate.save();
  }
}

export const adminService = new AdminService();
