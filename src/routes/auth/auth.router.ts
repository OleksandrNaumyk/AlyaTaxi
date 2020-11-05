import {Router} from 'express';

import {authController} from '../../controller/auth';
import {checkIsUserExistByPhoneMiddleware} from '../../middleware/user';
import {phoneValidatorMiddleware} from '../../middleware/validators';

const router = Router();

router.post('/', phoneValidatorMiddleware, checkIsUserExistByPhoneMiddleware, authController.authUser);

export const authRouter = router;
