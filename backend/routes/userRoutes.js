import express from "express";
import { getProfile, login,signup } from "../controllers/userController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";
const userRoute = express.Router();

userRoute.post("/login", login);
userRoute.post("/signup", signup);
userRoute.get("/profile",authenticateToken,getProfile);

export default userRoute;