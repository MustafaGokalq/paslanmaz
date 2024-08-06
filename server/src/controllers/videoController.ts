import { Request, Response } from "express";
import videoService from "../services/videoService";

class videoController {
  async getAllVideos(req: Request, res: Response) {
    try {
      const video = await videoService.getAllVideos();
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
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  }

  async getVideoById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Video ID is required",
        });
      }
      const video = await videoService.getVideoById(id);
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
    } catch (error) {
      console.error("Error fetching video:", error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }

  async createVideo(req: Request, res: Response) {
    try {
      const video = await videoService.createVideo(req.body);
      return res.status(201).json({
        success: false,
        message: "Video created successfully",
      });
    } catch (error) {
      console.error("Server Error");
      return res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  }

  async updateVideo(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Video ID is required",
        });
      }
      const updatedVideo = await videoService.updateVideo(id, req.body);
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
    } catch (error) {
      console.error("Error updating video:", error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }

  async deleteVideo(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Video ID is required",
        });
      }

      const deletedVideo = await videoService.deleteVideo(id);

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
    } catch (error) {
      console.error("Error deleting video:", error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
}

export default new videoController();
