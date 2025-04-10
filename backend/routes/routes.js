import { Router } from 'express';
import carRoutes from './carRoutes.js';
import competRoutes from './competRoutes.js';
import piloteRoutes from './piloteRoutes.js';
import pvcRoutes from './pvcRoutes.js';
const router = Router();

router.use(piloteRoutes);
router.use(competRoutes);
router.use(carRoutes);
router.use(pvcRoutes);

export default router;
