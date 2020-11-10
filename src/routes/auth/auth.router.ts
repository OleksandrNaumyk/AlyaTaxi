import {Router} from 'express';

import {authController} from '../../controller/auth';
import {checkIsUserExistByPhoneMiddleware} from '../../middleware/user';
import {phoneValidatorMiddleware} from '../../middleware/validators';
import {checkAccessTokenMiddleware} from '../../middleware/auth';

const router = Router();

router.post('/', phoneValidatorMiddleware, checkIsUserExistByPhoneMiddleware, authController.authUser);
router.post('/logout', checkAccessTokenMiddleware, authController.logoutUser);

export const authRouter = router;
