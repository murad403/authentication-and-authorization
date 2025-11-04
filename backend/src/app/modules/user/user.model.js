import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: ["user", "seller"], required: true, default: "user"}
})

const User = mongoose.models.User || model("User", userSchema);
export default User;