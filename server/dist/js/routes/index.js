"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productRoutes_1 = __importDefault(require("./productRoutes"));
const categoryRoutes_1 = __importDefault(require("./categoryRoutes"));
const videoRoutes_1 = __importDefault(require("./videoRoutes"));
const adminRoutes_1 = __importDefault(require("./adminRoutes"));
const staticContentRoute_1 = __importDefault(require("./staticContentRoute"));
const router = express_1.default.Router();
router.use('/products', productRoutes_1.default);
router.use('/category', categoryRoutes_1.default);
router.use("/video", videoRoutes_1.default);
router.use("/admin", adminRoutes_1.default);
router.use("/static", staticContentRoute_1.default);
exports.default = router;
