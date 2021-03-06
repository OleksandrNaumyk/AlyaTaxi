import {ResponseStatusCodesEnum} from '../../constants';
import {customErrors, ErrorHandler} from '../../errors';
import {NextFunction, Response} from 'express';
import {RequestExtendedInterface, UserInterface} from '../../models';
import {userService} from '../../services';

export const checkIsUserExistByPhoneMiddleware =
  async (req: RequestExtendedInterface, res: Response, next: NextFunction): Promise<void | NextFunction> => {
    const {phone} = req.body as UserInterface;

    const userByPhone = await userService.findOneByParams({phone});

    if (!userByPhone) {
      return next(new ErrorHandler(ResponseStatusCodesEnum.NOT_FOUND, customErrors.NOT_FOUND.message));
    }

    req.user = userByPhone;

    next();
  };
