import jwt from "jsonwebtoken";
import { JWT_ACCESSTOKEN_EXPIREIN, JWT_REFRESHTOKEN_EXPIREIN, JWT_SECRET } from "../config/index.js";

const tokenGenerator = (payload) =>{
    const accessToken = jwt.sign({id: payload?._id, email: payload?.email, role: payload?.role}, JWT_SECRET, {expiresIn: JWT_ACCESSTOKEN_EXPIREIN});
    const refreshToken = jwt.sign({id: payload?._id, email: payload?.email, role: payload?.role}, JWT_SECRET, {expiresIn: JWT_REFRESHTOKEN_EXPIREIN});
    
    return {accessToken, refreshToken};
}

export default tokenGenerator;