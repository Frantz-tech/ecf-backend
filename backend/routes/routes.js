import { Router } from 'express';
import competRoutes from './competRoutes.js';
import piloteRoutes from './piloteRoutes.js';
const router = Router();

router.use(piloteRoutes);
router.use(competRoutes);

export default router;
