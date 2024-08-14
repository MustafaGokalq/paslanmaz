"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./config/database"));
const index_1 = __importDefault(require("./routes/index"));
const rateLimit_1 = __importDefault(require("./middlewares/rateLimit"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 3000;
// Middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Rate limiting middleware
app.use("/api", rateLimit_1.default);
// API routes
app.use("/api", index_1.default);
app.listen(port, () => {
    (0, database_1.default)();
    console.log(`Server running on port ${port}`);
});
