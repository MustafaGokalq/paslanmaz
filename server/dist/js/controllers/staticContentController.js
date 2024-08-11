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
const staticContentService_1 = __importDefault(require("../services/staticContentService"));
class StaticContentController {
    getStaticContent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const content = yield staticContentService_1.default.getStaticContent();
                res.json(content);
            }
            catch (error) {
                res.status(500).json({ error: "Veri alınamadı" });
            }
        });
    }
    getStaticContentById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const content = yield staticContentService_1.default.getStaticContentById(id);
                if (!content) {
                    return res.status(404).json({ error: "Veri bulunamadı" });
                }
                res.json(content);
            }
            catch (error) {
                res.status(500).json({ error: "Veri alınamadı" });
            }
        });
    }
    createStaticContent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newContent = yield staticContentService_1.default.createStaticContent(req.body);
                res.status(201).json(newContent);
            }
            catch (error) {
                res.status(500).json({ error: "Veri oluşturulamadı" });
            }
        });
    }
    updateStaticContent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const updatedContent = yield staticContentService_1.default.updateStaticContent(id, req.body);
                res.json(updatedContent);
            }
            catch (error) {
                res.status(500).json({ error: "Veri güncellenemedi" });
            }
        });
    }
}
exports.default = new StaticContentController();
