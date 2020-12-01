import {NextFunction, Request, Response} from 'express';

import {ActionEnum, LogEnum, RequestHeadersEnum, ResponseStatusCodesEnum, UserStatusEnum} from '../../constants';
import {RequestExtendedInterface, UserInterface} from '../../models';
import {hashPassword, tokinizer} from '../../helpers';
import {logService, userService} from '../../services';
import {customErrors, ErrorHandler} from '../../errors';

class UserController {
  async createUser(req: Request, res: Response, next: NextFunction) {
    const user = req.body as UserInterface;

    user.password = await hashPassword(user.password);

    const {_id} = await userService.createUser(user);
    const {access_token} = tokinizer(ActionEnum.USER_REGISTER);

    await userService.addActionToken(_id, {action: ActionEnum.USER_REGISTER, token: access_token});
    await logService.createLog({event: LogEnum.USER_REGISTERED, userId: _id});

    res.sendStatus(ResponseStatusCodesEnum.CREATED);
  }

  async confirmUser(req: RequestExtendedInterface, res: Response, next: NextFunction) {
    console.log(req.user);

    const {_id, status, tokens =[]} = req.user as UserInterface;
    const tokenToDelete = req.get(RequestHeadersEnum.AUTHORIZATION);


    if (status !== UserStatusEnum.PENDING) {
      return next(
        new ErrorHandler(
          ResponseStatusCodesEnum.BAD_REQUEST,
          customErrors.BAD_REQUEST_USER_ACTIVATED.message,
          customErrors.BAD_REQUEST_USER_ACTIVATED.code)
      );
    }

    await userService.updateUserByParams({_id}, {status: UserStatusEnum.CONFIRMED});

    const index = tokens.findIndex(({action, token}) =>
    {
      return token === tokenToDelete && action === ActionEnum.USER_REGISTER;
    });
    if (index !== -1) {
      tokens.splice(index, 1);

      await userService.updateUserByParams({_id}, {tokens} as Partial<UserInterface>);
    }

    await logService.createLog({event: LogEnum.USER_CONFIRMED, userId: _id});

    res.end();
  }

  async forgotPassword(req: RequestExtendedInterface, res: Response, next: NextFunction) {
    const {_id} = req.user as UserInterface;
    const {access_token} = tokinizer(ActionEnum.FORGOT_PASSWORD);

    await userService.addActionToken(_id, {token: access_token, action: ActionEnum.FORGOT_PASSWORD});

    res.end();
  }

  async setForgotPass(req: RequestExtendedInterface, res: Response, next: NextFunction) {
    const {_id, tokens = []} = req.user as UserInterface;
    const {password} = req.body;
    const tokenToDelete = req.get(RequestHeadersEnum.AUTHORIZATION);
    const hashPass = await hashPassword(password);

    await userService.updateUserByParams({_id}, {password: hashPass});

    const index = tokens.findIndex(({action, token}) => {
      return token === tokenToDelete && action === ActionEnum.FORGOT_PASSWORD;
    });

    if (index !== -1) {
      tokens.splice(index, 1);

      await userService.updateUserByParams({_id}, {tokens} as Partial<UserInterface>);
    }

    res.end();
  }
}

export const userController = new UserController();
