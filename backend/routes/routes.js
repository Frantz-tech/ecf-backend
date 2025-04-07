import { Router } from 'express';
import piloteRoutes from './piloteRoutes.js';
const router = Router();

router.use(piloteRoutes);

export default router;
