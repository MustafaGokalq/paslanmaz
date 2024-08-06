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
const mongoose_1 = require("mongoose");
const videoModel_1 = __importDefault(require("../models/videoModel"));
class VideoService {
    getAllVideos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const video = yield videoModel_1.default.find();
                return video;
            }
            catch (error) {
                console.error("Error fetching products:", error);
                throw new Error("Error fetching products");
            }
        });
    }
    createVideo(videoBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const video = yield videoModel_1.default.create(videoBody);
                return video;
            }
            catch (error) {
                console.error("Error creating video:", error);
                throw new Error("Error creating video");
            }
        });
    }
    getVideoById(videoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!mongoose_1.Types.ObjectId.isValid(videoId)) {
                    throw new Error("Invalid video ID");
                }
                const video = yield videoModel_1.default.findById(videoId).exec();
                if (!video) {
                    return null;
                }
                return video;
            }
            catch (error) {
                console.error("Error fetching video by ID:", error);
                throw new Error("Error fetching video by ID");
            }
        });
    }
    updateVideo(videoId, videoBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!mongoose_1.Types.ObjectId.isValid(videoId)) {
                    throw new Error("Invalid video ID");
                }
                const updatedVideo = yield videoModel_1.default.findByIdAndUpdate(videoId, videoBody, {
                    new: true,
                }).exec();
                if (!updatedVideo) {
                    return null;
                }
                return updatedVideo;
            }
            catch (error) {
                console.error("Error updating video:", error);
                throw new Error("Error updating video");
            }
        });
    }
    deleteVideo(videoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!mongoose_1.Types.ObjectId.isValid(videoId)) {
                    throw new Error("Invalid video ID");
                }
                const deletedVideo = yield videoModel_1.default.findByIdAndDelete(videoId).exec();
                if (!deletedVideo) {
                    return null;
                }
                return deletedVideo;
            }
            catch (error) {
                console.error("Error deleting video:", error);
                throw new Error("Error deleting video");
            }
        });
    }
}
exports.default = new VideoService();
