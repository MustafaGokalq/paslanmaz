import mongoose, { Schema } from "mongoose";
import IVideo from "../types/videoType"

const videoSchema: Schema = new Schema<IVideo>({
    title: { type: String, required: true },
    description: { type: String, required:true },
    url: { type: String, required: true }
  }, {
    timestamps: true
  });
  
  export default mongoose.model<IVideo>('Video', videoSchema);