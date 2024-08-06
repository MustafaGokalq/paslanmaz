"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const videoService_1 = __importDefault(require("../services/videoService"));
class videoController {
    getAllVideos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const video = yield videoService_1.default.getAllVideos();
                if (!video || video.length === 0) {
                    return res.status(400).json({
                        success: false,
                        message: "No Video Found ",
                    });
                }
                return res.status(200).json({
                    success: true,
                    video,
                });
            }
            catch (error) {
                console.error("Error fetching products:", error);
                return res.status(500).json({
                    success: false,
                    message: "Server Error",
                });
            }
        });
    }
    getVideoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id) {
                    return res.status(400).json({
                        success: false,
                        message: "Video ID is required",
                    });
                }
                const video = yield videoService_1.default.getVideoById(id);
                if (!video) {
                    return res.status(404).json({
                        success: false,
                        message: "Video not found",
                    });
                }
                return res.status(200).json({
                    success: true,
                    video,
                });
            }
            catch (error) {
                console.error("Error fetching video:", error);
                return res.status(500).json({
                    success: false,
                    message: "Internal Server Error",
                });
            }
        });
    }
    createVideo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const video = yield videoService_1.default.createVideo(req.body);
                return res.status(201).json({
                    success: false,
                    message: "Video created successfully",
                });
            }
            catch (error) {
                console.error("Server Error");
                return res.status(500).json({
                    success: false,
                    message: "Server Error",
                });
            }
        });
    }
    updateVideo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id) {
                    return res.status(400).json({
                        success: false,
                        message: "Video ID is required",
                    });
                }
                const updatedVideo = yield videoService_1.default.updateVideo(id, req.body);
                if (!updatedVideo) {
                    return res.status(404).json({
                        success: false,
                        message: "Video not found",
                    });
                }
                return res.status(200).json({
                    success: true,
                    message: "Video updated successfully",
                });
            }
            catch (error) {
                console.error("Error updating video:", error);
                return res.status(500).json({
                    success: false,
                    message: "Internal Server Error",
                });
            }
        });
    }
    deleteVideo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id) {
                    return res.status(400).json({
                        success: false,
                        message: "Video ID is required",
                    });
                }
                const deletedVideo = yield videoService_1.default.deleteVideo(id);
                if (!deletedVideo) {
                    return res.status(404).json({
                        success: false,
                        message: "Video not found",
                    });
                }
                return res.status(200).json({
                    success: true,
                    message: "Video deleted successfully",
                });
            }
            catch (error) {
                console.error("Error deleting video:", error);
                return res.status(500).json({
                    success: false,
                    message: "Internal Server Error",
                });
            }
        });
    }
}
exports.default = new videoController();
