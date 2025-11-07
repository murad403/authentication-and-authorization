import catchAsync from "../../utils/catchAsync.js";
import tokenGenerator from "../../utils/tokenGenerator.js";
import { UserServices } from "./user.service.js";

const createUser = catchAsync(async (req, res) => {
    const newUserData = req.body;
    const result = await UserServices.createUserIntoDB(newUserData);
    const { accessToken, refreshToken } = tokenGenerator(result);
    res.status(200).json({
        success: true,
        message: "User registered successfully",
        data: result,
        accessToken,
        refreshToken
    })
})

const loginUser = catchAsync(async (req, res) => {
    const user = req.body;
    const result = await UserServices.loginUserFromDB(user);
    const { accessToken, refreshToken } = tokenGenerator(result);
    res.status(200).json({
        success: true,
        message: "User login successfully",
        data: result,
        accessToken, 
        refreshToken
    })
})

export const UserControllers = {
    createUser,
    loginUser,
}