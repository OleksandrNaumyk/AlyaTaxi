import {Router} from 'express';

import {tripController} from '../../controller';
import {checkAccessTokenMiddleware} from '../../middleware/auth';
import {newTripValidatorMiddleware} from '../../middleware/validators';

const router = Router();

router.post('/', checkAccessTokenMiddleware, newTripValidatorMiddleware, tripController.createTrip);

export const tripRouter = router;
