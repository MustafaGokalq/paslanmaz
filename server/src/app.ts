import express, {Express} from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/database";
import indexRoute from "./routes/index";
import apiLimiter from "./middlewares/rateLimit";

dotenv.config();


const app: Express = express();
const port: any = process.env.PORT || 3000;

//middlewares
app.use(express.json())
app.use(cors())

app.use("/api", apiLimiter)

//routes
app.use("/api",indexRoute);


app.listen(port ,():void=>{
    db();
    console.log("localhost running")
})

