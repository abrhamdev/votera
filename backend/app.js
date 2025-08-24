import express from "express";
import cors from "cors";
import { connection } from "./config/mongo.js";
import userRoute from "./routes/userRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
connection();
app.use("/user",userRoute);
export default app;
