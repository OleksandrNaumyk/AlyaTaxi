import {Router} from 'express';
import {adminController} from '../../controller';
import {checkIsPhoneExistsMiddleware} from '../../middleware/user';

const router = Router();

router.post('/', checkIsPhoneExistsMiddleware, adminController.createAdmin);
router.post('/confirm', adminController.confirmAdmin);

export const adminRouter = router;
