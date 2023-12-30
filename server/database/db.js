const mongoose  = require('mongoose');
const DefaultData = require('./defaultData.js')
require('dotenv').config();

const connection = async ()=>{
    const URL = "mongodb+srv://ayushjain:a9518217103@products.iokj8ph.mongodb.net/?retryWrites=true&w=majority";

    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: "true",
            useNewUrlParser: "true"
        });

        DefaultData();

        console.log("Database connected successfully.");
    } 
    catch (error) {
        console.log(error);
    }
}

module.exports = connection;
