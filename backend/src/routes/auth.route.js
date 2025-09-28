import { Router } from "express";
import {
    login,
    logout,
    signup,
    updateProfile,
} from "../controllers/auth.controller.js";
import { protectedRoute } from "../middlewares/auth.middleware.js";
import { arcjetProtection } from "../middlewares/arcjet.middleware.js";

const authRouter = Router();

// authRouter.use(arcjetProtection);

authRouter.post("/signup", signup);

authRouter.post("/login", login);

authRouter.post("/logout", logout);

authRouter.put("/update-profile", protectedRoute, updateProfile);

authRouter.get("/check", protectedRoute, (req, res) =>
    res.status(200).json(req.user)
);

export default authRouter;
