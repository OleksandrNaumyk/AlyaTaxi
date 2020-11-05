import {Router} from 'express';
import {tripController} from '../../controller';
import {checkIsUserExistByPhoneMiddleware} from '../../middleware/user';

const router = Router();

router.post('/', checkIsUserExistByPhoneMiddleware, tripController.createTrip);

export const tripRouter = router;
