import mongoose, { Schema } from "mongoose";
import IStaticContent from "../types/boilerType";

const StaticContentSchema: Schema<IStaticContent> = new Schema({
    question1: { type: String, required: true, default: "1. Soru Kazan ne işe yarar?" },
    answer1: { type: String, required: true, default: "Açıklama" },
    question2: { type: String, required: true, default: "2. Soru ..." },
    answer2: { type: String, required: true, default: "Açıklama" },
    question3: { type: String, required: true, default: "3. Soru ..." },
    answer3: { type: String, required: true, default: "Açıklama" },
    question4: { type: String, required: true, default: "4. Soru ..." },
    answer4: { type: String, required: true, default: "Açıklama" },
    question5: { type: String, required: true, default: "5. Soru ..." },
    answer5: { type: String, required: true, default: "Açıklama" }
}, {
    timestamps: true
});

export default mongoose.model<IStaticContent>('StaticContent', StaticContentSchema);