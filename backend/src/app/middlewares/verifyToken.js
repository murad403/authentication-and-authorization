import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/index.js";

const verifyToken = async(req, res, next) =>{
    const token = req.headers.authorization.split(" ")[1];
    if(!token){
        return res.status(401).json({success: false, message: "Forbidden access"});
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if(!decoded){
            return res.status(401).json({success: false, message: "Unauthorized access"});
        }
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({success: false, message: "Invalid token"});
    }
}

export default verifyToken;