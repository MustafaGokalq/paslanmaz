import express, {Router} from "express";
import videoController from "../controllers/videoController";


const router:Router = express.Router()


router.get("/",videoController.getAllVideos);

router.get("/:id", videoController.getVideoById);

router.post("/", videoController.createVideo);

router.put("/:id", videoController.updateVideo);

router.delete("/:id",videoController.deleteVideo);


export default router;