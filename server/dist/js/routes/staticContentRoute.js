"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const staticContentController_1 = __importDefault(require("../controllers/staticContentController"));
const router = (0, express_1.Router)();
router.get("/content", staticContentController_1.default.getStaticContent);
router.get("/content/:id", staticContentController_1.default.getStaticContentById);
router.put("/content/:id", staticContentController_1.default.updateStaticContent);
router.post("/content", staticContentController_1.default.createStaticContent);
exports.default = router;
