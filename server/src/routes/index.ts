import express, { Router } from 'express';
import productRoute from './productRoutes';
import categoryRoute from "./categoryRoutes";
import videoRoute from "./videoRoutes";
import adminRoute from "./adminRoutes";

const router: Router = express.Router();

router.use('/products', productRoute);
router.use('/categories',categoryRoute);
router.use("/video",videoRoute);
router.use("/admin",adminRoute);

export default router;
