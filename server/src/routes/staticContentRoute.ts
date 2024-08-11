import express, {Router} from "express";
import staticContentController from "../controllers/staticContentController";

const router: Router = Router();

router.get("/content", staticContentController.getStaticContent);

router.get("/content/:id", staticContentController.getStaticContentById);

router.put("/content/:id",staticContentController.updateStaticContent);

router.post("/content", staticContentController.createStaticContent);


export default router;