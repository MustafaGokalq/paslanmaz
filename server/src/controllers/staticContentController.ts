import { Request, Response } from "express";
import StaticContentService from "../services/staticContentService";

class StaticContentController {
    async getStaticContent(req: Request, res: Response) {
        try {
            const content = await StaticContentService.getStaticContent();
            res.json(content);
        } catch (error) {
            res.status(500).json({ error: "Veri alınamadı" });
        }
    }

    async getStaticContentById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const content = await StaticContentService.getStaticContentById(id);
            if (!content) {
                return res.status(404).json({ error: "Veri bulunamadı" });
            }
            res.json(content);
        } catch (error) {
            res.status(500).json({ error: "Veri alınamadı" });
        }
    }


    async createStaticContent(req: Request, res: Response) {
        try {
            const newContent = await StaticContentService.createStaticContent(req.body);
            res.status(201).json(newContent);
        } catch (error) {
            res.status(500).json({ error: "Veri oluşturulamadı" });
        }
    }

    async updateStaticContent(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const updatedContent = await StaticContentService.updateStaticContent(id, req.body);
            res.json(updatedContent);
        } catch (error) {
            res.status(500).json({ error: "Veri güncellenemedi" });
        }
    }
}

export default new StaticContentController();
