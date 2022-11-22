import {Router} from 'express';
import * as clientController from '../controllers/clientController';

const router = Router();

router.get('/client', clientController.find);
router.get('/client/:id', clientController.findById);
router.post('/client', clientController.create);
router.put('/client/:id', clientController.update);
router.delete('/client/:id', clientController.destroy);

export default router;