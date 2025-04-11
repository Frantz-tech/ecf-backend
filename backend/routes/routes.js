import { Router } from 'express';
import adminRoutes from './adminRoutes.js';
import carRoutes from './carRoutes.js';
import competRoutes from './competRoutes.js';
import piloteRoutes from './piloteRoutes.js';
import pvcRoutes from './pvcRoutes.js';
const router = Router();

router.use(piloteRoutes);
router.use(competRoutes);
router.use(carRoutes);
router.use(pvcRoutes);
router.use(adminRoutes);
export default router;
