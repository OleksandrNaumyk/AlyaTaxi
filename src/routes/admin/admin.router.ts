import {Router} from 'express';
import {adminController} from '../../controller';
import {checkIsPhoneExistsMiddleware} from '../../middleware/user';

const router = Router();

router.post('/', checkIsPhoneExistsMiddleware, adminController.createAdmin);

export const adminRouter = router;
