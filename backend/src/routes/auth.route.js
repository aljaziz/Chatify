import { Router } from "express";
import { signup } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/signup", signup);

authRouter.get("/login", (req, res) => {
    res.send("Login endpoint");
});

authRouter.get("/logout", (req, res) => {
    res.send("Logout endpoint");
});

export default authRouter;
