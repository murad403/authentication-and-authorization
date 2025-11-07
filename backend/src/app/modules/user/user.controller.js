import { JWT_SECRET } from "../../config/index.js";
import catchAsync from "../../utils/catchAsync.js";
import tokenGenerator from "../../utils/tokenGenerator.js";
import { UserServices } from "./user.service.js";
import jwt from "jsonwebtoken";


const createUser = catchAsync(async (req, res) => {
    const newUserData = req.body;
    const result = await UserServices.createUserIntoDB(newUserData);
    const { accessToken, refreshToken } = tokenGenerator(result);
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    }).status(200).json({
        success: true,
        message: "User registered successfully",
        data: result,
        accessToken
    })
})

const loginUser = catchAsync(async (req, res) => {
    const user = req.body;
    const result = await UserServices.loginUserFromDB(user);
    const { accessToken, refreshToken } = tokenGenerator(result);
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    }).status(200).json({
        success: true,
        message: "User login successfully",
        data: result,
        accessToken
    })
})

const generateToken = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    console.log("Refresh token", refreshToken);
    if (!refreshToken) {
        return res.status(403).json({ success: false, message: "Forbidden access" });
    }
    try {
        const decoded = jwt.verify(refreshToken, JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({success: false, message: "Unauthorized access"});
        }
        const payload = {
            id: decoded.id,
            email: decoded.email,
            role: decoded.role
        }
        const {accessToken} = tokenGenerator(payload);
        res.status(200).json({
            success: true,
            message: "Access token generated",
            accessToken
        })
    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
}

export const UserControllers = {
    createUser,
    loginUser,
    generateToken
}