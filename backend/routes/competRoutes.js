import { Router } from 'express';
import { Controller } from '../controllers/competController.js';

const router = Router();

router.post('/api/competition', Controller.createCompet);
router.get('/api/competition', Controller.getAllCompets);
router.get('/api/competition/:id', Controller.getCompetById);
router.put('/api/competition/:id', Controller.updateCompet);
router.delete('/api/competition/:id', Controller.deleteCompet);

export default router;
