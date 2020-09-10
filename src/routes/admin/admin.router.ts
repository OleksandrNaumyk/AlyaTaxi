import {Router} from 'express';
import {adminController} from '../../controller';

const router = Router();

router.post('/', adminController.createAdmin);

export const adminRouter = router;
