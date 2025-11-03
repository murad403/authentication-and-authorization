import { UserServices } from "./user.service.js"

const createUser = async(req, res) =>{
    try {
        const newUserData = req.body();
        const result = await UserServices.createUserIntoDB(newUserData);
        res.stats(200).json({
            success: true,
            message: "User created successfully",
            data: result
        })
    } catch (error) {
        console.log(`create user error ${error}`);
        res.stats(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export const UserControllers = {
    createUser
}