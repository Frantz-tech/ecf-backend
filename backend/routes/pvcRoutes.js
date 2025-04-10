import { Router } from 'express';
import { PvcController } from '../controllers/pvcController.js';

const router = Router();

router.post('/api/pvc', PvcController.createPvc); // Créer une nouvelle liaison
router.get('/api/pvc', PvcController.getAllPvcs); // Récupérer toutes les liaisons
router.get('/api/pvc/:id', PvcController.getPvcById); // Récupérer une liaison par ID
router.put('/api/pvc/:id', PvcController.updatePvc); // Mettre à jour une liaison par ID
router.delete('/api/pvc/:id', PvcController.deletePvc); // Supprimer une liaison par ID

export default router;
