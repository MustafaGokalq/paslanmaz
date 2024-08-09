import Express, {Router} from "express";
import adminController from "../controllers/adminController";
import auth from "../middlewares/auth";


const router:Router = Express.Router();

router.post("/register",adminController.register);

router.post("/login", adminController.login);

router.post("/reset-password",auth, adminController.resetPassword);


export default router;