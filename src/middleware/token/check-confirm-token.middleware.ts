import {NextFunction, Response} from 'express';
import {ActionEnum, RequestHeadersEnum, ResponseStatusCodesEnum} from '../../constants';
import {customErrors, ErrorHandler} from '../../errors';
import {userService} from '../../services/user';
import {RequestExtendedInterface} from '../../models';
import {tokenVerificator} from '../../helpers';

export const checkConfirmTokenMiddleware = async (req: RequestExtendedInterface, res: Response, next: NextFunction): Promise<void> => {
  const token = req.get(RequestHeadersEnum.AUTHORIZATION);

  if (!token) {
    return next(new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST, customErrors.BAD_REQUEST_NO_TOKEN.message));
  }

  const b = await tokenVerificator(ActionEnum.USER_REGISTER, token);
  console.log(b);

  const userByToken = await userService.findUserByActionToken(ActionEnum.USER_REGISTER, token);

  if (!userByToken) {
    return next(new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST, customErrors.NOT_FOUND.message));
  }

  req.user = userByToken;

  next();
};
