import { Router } from 'express';
import { adminController } from '../controllers/adminController.js'; // Assure-toi que le chemin est correct

const router = Router();

// Route pour authentifier un administrateur avec email et mot de passe
router.post('/api/admin/login', adminController.authenticateAdmin);

// Route pour créer un administrateur
router.post('/api/admin/create', adminController.createAdmin); // Nouvelle route pour créer un admin

export default router;
