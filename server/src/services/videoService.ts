import { Types } from "mongoose";
import Video from "../models/videoModel";
import IVideo from "../types/videoType";

class VideoService {
  async getAllVideos() {
    try {
      const video = await Video.find();
      return video;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Error fetching products");
    }
  }

  async createVideo(videoBody: IVideo) {
    try {
      const video = await Video.create(videoBody);
      return video;
    } catch (error) {
      console.error("Error creating video:", error);
      throw new Error("Error creating video");
    }
  }

  async getVideoById(videoId: string) {
    try {
      if (!Types.ObjectId.isValid(videoId)) {
        throw new Error("Invalid video ID");
      }
      const video = await Video.findById(videoId).exec();
      if (!video) {
        return null;
      }
      return video;
    } catch (error) {
      console.error("Error fetching video by ID:", error);
      throw new Error("Error fetching video by ID");
    }
  }

  async updateVideo(videoId: string, videoBody: Partial<IVideo>) {
    try {
      if (!Types.ObjectId.isValid(videoId)) {
        throw new Error("Invalid video ID");
      }
      const updatedVideo = await Video.findByIdAndUpdate(videoId, videoBody, {
        new: true,
      }).exec();
      if (!updatedVideo) {
        return null;
      }
      return updatedVideo;
    } catch (error) {
      console.error("Error updating video:", error);
      throw new Error("Error updating video");
    }
  }

  async deleteVideo(videoId: string) {
    try {
      if (!Types.ObjectId.isValid(videoId)) {
        throw new Error("Invalid video ID");
      }
      const deletedVideo = await Video.findByIdAndDelete(videoId).exec();
      if (!deletedVideo) {
        return null;
      }
      return deletedVideo;
    } catch (error) {
      console.error("Error deleting video:", error);
      throw new Error("Error deleting video");
    }
  }
}


export default new VideoService();