import {Router} from 'express';
import {userController} from '../../controller';
import {
  checkConfirmTokenMiddleware,
  checkForgotTokenMiddleware,
  checkIsPhoneExistsMiddleware,
  checkIsUserExistByPhoneMiddleware,
  checkIsUserValidMiddleware,
  phoneValidatorMiddleware,
  singlePasswordValidatorMiddleware
} from '../../middleware';

const router = Router();

router.post('/', checkIsUserValidMiddleware, checkIsPhoneExistsMiddleware, userController.createUser);
router.post('/confirm', checkConfirmTokenMiddleware, userController.confirmUser);
router.post(
  '/password/forgot',
  phoneValidatorMiddleware,
  checkIsUserExistByPhoneMiddleware,
  userController.forgotPassword
);
router.post(
  '/password/reset',
  singlePasswordValidatorMiddleware,
  checkForgotTokenMiddleware,
  userController.setForgotPass
);

export const userRouter = router;
