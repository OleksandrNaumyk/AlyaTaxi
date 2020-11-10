import { AccessTokenModel } from '../../database';
import {AccessTokenInterface, UserInterface} from '../../models';

class AuthService {
  createTokenPair(tokenObject: Partial<AccessTokenInterface>): Promise<AccessTokenInterface> {
    const tokensToCreate = new AccessTokenModel(tokenObject);

    return tokensToCreate.save();
  }

  async findUserByToken(findObject: {accessToken?: string, refreshToken?: string}): Promise<UserInterface | null> {
    const tokenAndUser = await AccessTokenModel
      .findOne(findObject)
      .populate('userId')
      .select({userId: 1, _id: 0}) as any;

    return tokenAndUser?.userId?.toJSON();
  }

  removeToken(removeObject: {accessToken?: string, refreshToken?: string}): Promise<AccessTokenInterface | null> {
    return AccessTokenModel.findOneAndDelete(removeObject) as any;
  }
}

export const authService = new AuthService();
