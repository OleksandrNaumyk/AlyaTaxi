import {NextFunction, Request, Response} from 'express';
import * as Joi from 'joi';
import {phonePasswordValidator} from '../../validators';
import {ErrorHandler} from '../../errors';
import {ResponseStatusCodesEnum} from '../../constants';

export const phonePasswordValidatorMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const {error} = Joi.validate(req.body, phonePasswordValidator);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST, error.details[0].message));
  }

  next();
};
