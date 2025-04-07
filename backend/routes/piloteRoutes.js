import { Router } from 'express';
import { Controller } from '../controllers/piloteController.js';

const router = Router();

router.post('/api/pilote', Controller.createPilote);
router.get('/api/pilote', Controller.getAllPilotes);
router.get('/api/pilote/:id', Controller.getPiloteById);
router.put('/api/pilote/:id', Controller.updatePilote);
router.delete('/api/pilote/:id', Controller.deletePilote);

export default router;
