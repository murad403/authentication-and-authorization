import User from "./user.model.js";

const createUserIntoDB = async(payload) =>{
    const existingUser = await User.findOne({email: payload.email});
    if(existingUser){
        throw new Error("User already exists");
    }
    const result = await User.create(payload);
    return result;
}

export const UserServices = {
    createUserIntoDB
}