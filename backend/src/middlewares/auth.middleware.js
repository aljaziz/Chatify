import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";
import { ENV } from "../config/env.js";

export const protectedRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token)
            return res.status(401).json({ message: "Unauthorized Access" });
        const decoded = jwt.verify(token, ENV.JWT_SECRET);
        if (!decoded)
            return res.status(401).jsoN({ message: "Unauthorized Access" });
        const user = await UserModel.findById(decoded.userId).select(
            "-password"
        );
        if (!user) return res.status(404).json({ message: "User not found" });
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protected route middleware", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
