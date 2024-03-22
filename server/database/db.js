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

<<<<<<< HEAD
export default connection;
=======
module.exports = connection;
>>>>>>> 826cd04902aa2460e9e372ecc1970e072d47ccad
