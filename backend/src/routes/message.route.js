import { Router } from "express";
import {
    getAllContacts,
    getChatPartners,
    getMessagesByUserId,
    sendMessage,
} from "../controllers/message.controller.js";
import { protectedRoute } from "../middlewares/auth.middleware.js";
import { arcjetProtection } from "../middlewares/arcjet.middleware.js";

const messageRouter = Router();

messageRouter.use(protectedRoute);

messageRouter.get("/contacts", getAllContacts);
messageRouter.get("/chats", getChatPartners);
messageRouter.get("/:id", getMessagesByUserId);
messageRouter.post("/send/:id", sendMessage);

export default messageRouter;
