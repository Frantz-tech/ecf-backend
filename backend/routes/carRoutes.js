import { Router } from 'express';
import { Controller } from '../controllers/carController.js';

const router = Router();

router.post('/api/car', Controller.createCar);
router.get('/api/car', Controller.getAllCar);
router.get('/api/car/:id', Controller.getCarById);
router.put('/api/car/:id', Controller.updateCar);
router.delete('/api/car/:id', Controller.deleteCar);

export default router;
