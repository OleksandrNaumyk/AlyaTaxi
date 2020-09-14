import {NextFunction, Request, Response} from 'express';
import {userService} from '../../services';
import {customErrors, ErrorHandler} from '../../errors';
import {UserInterface} from '../../models';

export const checkIsPhoneExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {phone} = req.body as UserInterface;
  const userByPhone = await userService.findOneByParams({phone});

  if (userByPhone) {
    return next(new ErrorHandler(
      400,
      customErrors.BAD_REQUEST_USER_REGISTERED.message,
      customErrors.BAD_REQUEST_USER_REGISTERED.code
    ));
  }

  next();
};
