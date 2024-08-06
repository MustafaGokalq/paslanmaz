import mongoose, { Schema, Document } from 'mongoose';

interface IVideo extends Document {
  title: string;
  description?: string;
  url: string;
}


export default IVideo;