import { Router } from "express";

const messageRouter = Router();

messageRouter.get("/send", (req, res) => {
    res.send("Message endpoint");
});

export default messageRouter;
