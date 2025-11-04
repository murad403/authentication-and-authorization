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

const loginUserFromDB = async(payload) =>{
    const existingUser = await User.findOne({email: payload.email});
    if(!existingUser){
        throw new Error("User does not exists please sing up first!");
    }
    const comparePassword = await bcrypt.compare(payload.password, existingUser.password);
    if(!comparePassword){
        throw new Error("Incorrect password");
    }
    return existingUser;
}

export const UserServices = {
    createUserIntoDB,
    loginUserFromDB
}