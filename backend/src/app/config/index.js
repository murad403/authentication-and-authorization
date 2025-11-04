import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;
export const MONGOOSE_URI = process.env.MONGOOSE_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_ACCESSTOKEN_EXPIREIN = process.env.JWT_ACCESSTOKEN_EXPIREIN;
export const JWT_REFRESHTOKEN_EXPIREIN = process.env.JWT_REFRESHTOKEN_EXPIREIN;
