import {NextFunction, Request, Response} from 'express';
import * as Joi from 'joi';
import {newTripValidator} from '../../validators';
import {ErrorHandler} from '../../errors';
import {ResponseStatusCodesEnum} from '../../constants';

export const newTripValidatorMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const {error} = Joi.validate(req.body, newTripValidator);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST, error.details[0].message));
  }

  next();
};
