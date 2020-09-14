import {Router} from 'express';
import {userController} from '../../controller';
import {checkIsPhoneExistsMiddleware} from '../../middleware';

const router = Router();

router.post('/', checkIsPhoneExistsMiddleware, userController.createUser);
router.post('/confirm', userController.confirmUser);

export const userRouter = router;
