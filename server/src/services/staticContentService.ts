import StaticContent from "../models/staticContentModel";

class StaticContentService {
    async getStaticContent() {
        return await StaticContent.findOne();
    }

    async getStaticContentById(id: string) {
        return await StaticContent.findById(id);
    }


    async createStaticContent(data: Partial<typeof StaticContent.prototype>) {
        const newContent = new StaticContent(data);
        return await newContent.save();
    }


    async updateStaticContent(id: string, data: Partial<typeof StaticContent.prototype>) {
        return await StaticContent.findByIdAndUpdate(id, data, { new: true });
    }
}

export default new StaticContentService();
