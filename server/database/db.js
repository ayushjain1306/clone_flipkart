import mongoose from "mongoose";
import DefaultData from "./defaultData.js";
import dotenv from "dotenv";

dotenv.config();

const connection = async ()=>{
    const URL = process.env.URL;

    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: "true",
            useNewUrlParser: "true"
        });

        DefaultData();
    } 
    catch (error) {
        console.log(error);
    }
}

export default connection;
