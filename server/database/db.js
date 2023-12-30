const mongoose  = require('mongoose');
const DefaultData = require('./defaultData.js')
require('dotenv').config();

const connection = async ()=>{
    const URL = process.env.URL;

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