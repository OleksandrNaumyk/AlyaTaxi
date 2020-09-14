import {Router} from 'express';
import {driverController} from '../../controller';
import {checkIsPhoneExistsMiddleware} from '../../middleware/user';

const router = Router();

router.post('/', checkIsPhoneExistsMiddleware, driverController.createDriver);

export const driverRouter = router;
