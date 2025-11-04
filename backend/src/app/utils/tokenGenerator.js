import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/index.js";

const tokenGenerator = (payload, expiresIn) =>{
    const token = jwt.sign({email: payload.email, role: payload.role}, JWT_SECRET, {expiresIn: expiresIn});
    return token;
}

export default tokenGenerator;