import axios from 'axios'

const URL = "http://localhost:8000";

export async function checkOTP(data){
    try {
        return await axios.post(`${URL}/checkOTP`, data);
        
    }
    catch(error){
        let index = error.message.indexOf("401");

        if (index !== -1){
            return false;
        }
    }
}

async function sendOTP(data) {
    try {
        let response = await axios.post(`${URL}/sendOTP`, data);
        console.log(response);
    }
    catch (error){
        console.log(error.message)
    }
}

export default sendOTP;