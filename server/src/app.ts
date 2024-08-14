import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/database";
import indexRoute from "./routes/index";
import apiLimiter from "./middlewares/rateLimit";
import mongoSanitize from 'express-mongo-sanitize';
import errorHandler from "./validations/errorHandler";

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT) || 3000;



// Middlewares
app.use(express.json());
app.use(express.urlencoded({limit:'50m', extended:true, parameterLimit:50000}))
app.use(cors());

// Rate limiting middleware
app.use("/api", apiLimiter);


app.use(
    mongoSanitize({
      replaceWith: '_',
    }),
  );

// API routes
app.use("/api",indexRoute);

app.use(errorHandler);

app.listen(port, (): void => {
    db();
    console.log(`Server running on port ${port}`);
});
