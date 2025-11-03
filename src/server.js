import mongoose from "mongoose";
import { MONGOOSE_URI, PORT } from "./app/config/index.js";
import app from "./app.js";

async function main(){
    try {
        await mongoose.connect(MONGOOSE_URI);
        console.log("Mongoose connected successfully!");
        app.listen(PORT, () =>{
            console.log(`server is running on port ${PORT}`);
        })
    } catch (error) {
        console.log(`Mongoose connection error ${error}`);
    }
}
main();