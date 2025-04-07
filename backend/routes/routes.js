import { Router } from 'express';
import carRoutes from './carRoutes.js';
import competRoutes from './competRoutes.js';
import piloteRoutes from './piloteRoutes.js';

const router = Router();

router.use(piloteRoutes);
router.use(competRoutes);
router.use(carRoutes);

export default router;
