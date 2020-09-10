import {Router} from 'express';
import {driverController} from '../../controller';

const router = Router();

router.post('/', driverController.createDriver);

export const driverRouter = router;
