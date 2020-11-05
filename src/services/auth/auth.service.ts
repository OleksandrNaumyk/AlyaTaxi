import { AccessTokenModel } from '../../database';
import {AccessTokenInterface} from '../../models';

class AuthService {
  createTokenPair(tokenObject: Partial<AccessTokenInterface>): Promise<AccessTokenInterface> {
    const tokensToCreate = new AccessTokenModel(tokenObject);

    return tokensToCreate.save();
  }

  findUserByToken(findObject: {accessToken?: string, refreshToken?: string}): Promise<AccessTokenInterface | null> {
    return AccessTokenModel.findOne(findObject) as any;
  }

  removeToken(removeObject: {accessToken?: string, refreshToken?: string}): Promise<AccessTokenInterface | null> {
    return AccessTokenModel.findOneAndDelete(removeObject) as any;
  }
}

export const authService = new AuthService();
