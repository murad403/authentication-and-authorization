import User from "./user.model.js";
import bcrypt from "bcrypt";

const createUserIntoDB = async(payload) =>{
    const existingUser = await User.findOne({email: payload.email});
    if(existingUser){
        throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    const result = await User.create({...payload, password: hashedPassword});
    return result;
}

export const UserServices = {
    createUserIntoDB
}