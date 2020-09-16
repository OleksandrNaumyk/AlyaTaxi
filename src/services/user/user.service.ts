import {Types} from 'mongoose';

import {UserModel} from '../../database';
import {UserInterface, UserTokenInterface} from '../../models';

class UserService {
  createUser(user: Partial<UserInterface>): Promise<UserInterface> {
    const userToCreate = new UserModel(user);

    return userToCreate.save();
  }
  addActionToken(id: string, tokenObject: UserTokenInterface): Promise<UserInterface> {
    return UserModel.update(
      {_id: Types.ObjectId(id)},
      {
        $push: {
          tokens: tokenObject as any
        }
      }) as any;
  }
  findOneByParams(findObject: Partial<UserInterface>): Promise<UserInterface | null> {
    return UserModel.findOne(findObject) as any;
  }
}

export const userService = new UserService();
