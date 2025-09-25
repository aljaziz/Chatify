import { Router } from "express";

const authRouter = Router();

authRouter.get("/signup", (req, res) => {
    res.send("Singup endpoint");
});

authRouter.get("/login", (req, res) => {
    res.send("Login endpoint");
});

authRouter.get("/logout", (req, res) => {
    res.send("Logout endpoint");
});

export default authRouter;
