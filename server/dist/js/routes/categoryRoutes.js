"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categoryController_1 = __importDefault(require("../controllers/categoryController"));
const authorize_1 = __importDefault(require("../middlewares/authorize"));
const router = express_1.default.Router();
router.get("/:id", categoryController_1.default.getSingleCategory);
router.get("/", categoryController_1.default.getAllCategories);
router.post("/", (0, authorize_1.default)(['superAdmin']), categoryController_1.default.createCategory);
router.put("/:id", (0, authorize_1.default)(['superAdmin']), categoryController_1.default.updateCategory);
router.delete("/:id", (0, authorize_1.default)(['superAdmin']), categoryController_1.default.deleteCategory);
exports.default = router;
