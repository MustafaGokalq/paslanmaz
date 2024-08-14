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
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const errorHandler_1 = __importDefault(require("./validations/errorHandler"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 3000;
// Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ limit: '50m', extended: true, parameterLimit: 50000 }));
app.use((0, cors_1.default)());
// Rate limiting middleware
app.use("/api", rateLimit_1.default);
app.use((0, express_mongo_sanitize_1.default)({
    replaceWith: '_',
}));
// API routes
app.use("/api", index_1.default);
app.use(errorHandler_1.default);
app.listen(port, () => {
    (0, database_1.default)();
    console.log(`Server running on port ${port}`);
});
