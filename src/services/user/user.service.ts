import {Types} from 'mongoose';

import {UserModel} from '../../database';
import {UserInterface, UserTokenInterface} from '../../models';
import {ActionEnum} from '../../constants';

class UserService {
  createUser(user: Partial<UserInterface>): Promise<UserInterface> {
    const userToCreate = new UserModel(user);

    return userToCreate.save();
  }
  addActionToken(userId: string, tokenObject: UserTokenInterface): Promise<UserInterface> {
    return UserModel.update(
      {_id: Types.ObjectId(userId)},
      {
        $push: {
          tokens: tokenObject
        }
      }) as any;
  }

  updateUserByParams(params: Partial<UserInterface>, update: Partial<UserInterface>): Promise<UserInterface> {
    return UserModel.updateOne(params, update, {new: true}) as any;
  }

  findOneByParams(findObject: Partial<UserInterface>): Promise<UserInterface | null> {
    return UserModel.findOne(findObject) as any;
  }

  findUserByActionToken(action: ActionEnum, token: string): Promise<UserInterface | null> {
    return UserModel.findOne({
      $and: [
        {'tokens.action': action},
        {'tokens.token': token}
      ]
    }) as any;
  }

  // removeActionToken(action: ActionEnum, token: string): Promise<UserInterface | null> {
  //   return UserModel.update(
  //     {},
  //     {
  //       $pull: {
  //         $and: [
  //           {'tokens.token': token},
  //           {'tokens.action': action}
  //         ]
  //       } as any
  //     }) as any;
  // }

}

export const userService = new UserService();
