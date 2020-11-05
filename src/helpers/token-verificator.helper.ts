import * as jwt from 'jsonwebtoken';
import {promisify} from 'util';

import {ActionEnum, ResponseStatusCodesEnum} from '../constants';
import {config} from '../config';
import {ErrorHandler} from '../errors';

const verify = promisify(jwt.verify);

export const tokenVerificator = async (action: ActionEnum, token: string): Promise<boolean> => {

  let isValid =false;

  switch (action) {
    case ActionEnum.USER_REGISTER:
      isValid = await verify(token, config.JWT_CONFIRM_EMAIL_SECRET) as boolean;
      break;

    case ActionEnum.FORGOT_PASSWORD:
      isValid = await verify(token, config.JWT_PASS_RESET_SECRET) as boolean;
      break;

    default:
      throw new ErrorHandler(ResponseStatusCodesEnum.SERVER, 'wrong Action type');
  }

  return isValid;

};
