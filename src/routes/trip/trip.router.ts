import {Router} from 'express';
import {tripController} from '../../controller';

const router = Router();

router.post('/', tripController.createTrip);

export const tripRouter = router;
