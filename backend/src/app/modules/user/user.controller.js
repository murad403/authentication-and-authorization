import { JWT_ACCESSTOKEN_EXPIREIN, JWT_REFRESHTOKEN_EXPIREIN } from "../../config/index.js";
import catchAsync from "../../utils/catchAsync.js";
import tokenGenerator from "../../utils/tokenGenerator.js";
import { UserServices } from "./user.service.js";

const createUser = catchAsync(async (req, res) => {
    const newUserData = req.body;
    const result = await UserServices.createUserIntoDB(newUserData);
    const accessToken = tokenGenerator(newUserData, JWT_ACCESSTOKEN_EXPIREIN);
    const refreshToken = tokenGenerator(newUserData, JWT_REFRESHTOKEN_EXPIREIN);
    res.cookie("accessToken", accessToken, {
        httpOnly: false,
        secure: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 2,
    }).cookie("refreshToken", refreshToken, {
        httpOnly: false,
        secure: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 30,
    })
        .status(200).json({
            success: true,
            message: "User registered successfully",
            data: result
        })
})

const loginUser = catchAsync(async (req, res) => {
    const user = req.body;
    const result = await UserServices.loginUserFromDB(user);
    const accessToken = tokenGenerator(result, JWT_ACCESSTOKEN_EXPIREIN);
    const refreshToken = tokenGenerator(result, JWT_REFRESHTOKEN_EXPIREIN);
    res.cookie("accessToken", accessToken, {
        httpOnly: false,
        secure: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 2,
    }).cookie("refreshToken", refreshToken, {
        httpOnly: false,
        secure: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 30,
    })
        .status(200).json({
            success: true,
            message: "User login successfully",
            data: result
        })
})


export const UserControllers = {
    createUser,
    loginUser
}