import {Types} from 'mongoose';

import {UserModel} from '../../database';
import {UserInterface, UserTokenInterface} from '../../models';

class UserService {
  createUser(user: Partial<UserInterface>) {
    const userToCreate = new UserModel(user);

    return userToCreate.save();
  }
  addActionToken(id: string, tokenObject: UserTokenInterface) {
    return UserModel.aggregate([
      {
        $match: {
          _id: Types.ObjectId(id)
        }
      }
    ]);
  }
  findOneByParams(findObject: Partial<UserInterface>) {
    return UserModel.findOne({findObject});
  }
}

export const userService = new UserService();
