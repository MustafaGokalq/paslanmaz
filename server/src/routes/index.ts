import express, { Router } from 'express';
import productRoute from './productRoutes';
import categoryRoute from "./categoryRoutes";
import videoRoute from "./videoRoutes"

const router: Router = express.Router();

router.use('/products', productRoute);
router.use('/category',categoryRoute);
router.use("/video",videoRoute);

export default router;
