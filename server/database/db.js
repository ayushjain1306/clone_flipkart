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
    } 
    catch (error) {
        console.log(error);
    }
}

export default connection;
