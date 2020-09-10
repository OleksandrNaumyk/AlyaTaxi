import {UserModel} from '../../database';
import {UserInterface} from '../../models';

class UserService {
  createUser(user: Partial<UserInterface>) {
    const userToCreate = new UserModel(user);

    return userToCreate.save();
  }
}

export const userService = new UserService();
