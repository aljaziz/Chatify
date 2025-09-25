import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import messageRouter from "./routes/message.route.js";
import path from "path";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

const __dirname = path.resolve();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);

// make ready for deployment
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });
}

app.listen(3000, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});
