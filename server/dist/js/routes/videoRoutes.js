"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const videoController_1 = __importDefault(require("../controllers/videoController"));
const router = express_1.default.Router();
router.get("/", videoController_1.default.getAllVideos);
router.get("/:id", videoController_1.default.getVideoById);
router.post("/", videoController_1.default.createVideo);
router.put("/:id", videoController_1.default.updateVideo);
router.delete("/:id", videoController_1.default.deleteVideo);
exports.default = router;
