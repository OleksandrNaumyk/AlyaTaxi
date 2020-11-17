import {NextFunction, Response} from 'express';
import {customErrors, ErrorHandler} from '../../errors';
import {RequestExtendedInterface, UserInterface} from '../../models';
import {ResponseStatusCodesEnum, UserStatusEnum} from '../../constants';

export const checkIsUserConfirmedMiddleware =
    (req: RequestExtendedInterface, res: Response, next: NextFunction): void | NextFunction => {
      const {status} = req.user as UserInterface;

      if (status !== UserStatusEnum.CONFIRMED) {
        return next(new ErrorHandler(
          ResponseStatusCodesEnum.FORBIDDEN,
          customErrors.FORBIDDEN_USER_NOT_CONFIRMED.message,
          customErrors.FORBIDDEN_USER_NOT_CONFIRMED.code
        ));
      }
      next();
    };
