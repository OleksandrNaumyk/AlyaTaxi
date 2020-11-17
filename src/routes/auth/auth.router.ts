import {Router} from 'express';

import {authController} from '../../controller/auth';
import {checkIsUserConfirmedMiddleware, checkIsUserExistByPhoneMiddleware} from '../../middleware/user';
import {checkAccessTokenMiddleware} from '../../middleware/auth';
import {phonePasswordValidatorMiddleware} from '../../middleware/validators';

const router = Router();

router.post('/',
  phonePasswordValidatorMiddleware,
  checkIsUserExistByPhoneMiddleware,
  checkIsUserConfirmedMiddleware,
  authController.authUser
);
router.post('/logout', checkAccessTokenMiddleware, authController.logoutUser);

export const authRouter = router;
