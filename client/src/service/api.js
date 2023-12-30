import axios from 'axios';

const URL = "clone-flipkart-mern.vercel.app";

export async function findLoginDetails(data){
    try{
        let response = axios.post(`${URL}/getName`, data);
        
        if (response.status === 200){
            return response.data;
        }
        else {
            console.log("Error while fetching the data");
        }
    }
    catch (error){
        console.log(error);
    }
}

export async function authenticateLogin(data) {
    try {
        let response = await axios.post(`${URL}/login`, data);

        if (response.status === 200){
            return response;
        }
    }
    catch (error){
        const index = error.message.indexOf("401");

        if (index !== -1){
            return "Error1";
        }
        else {
            return "Error2";
        }
    }
}

async function authenticateSignup(data) {
    try {
        return await axios.post(`${URL}/signup`, data);
    }
    catch (error){
        const index1 = error.message.indexOf("401")
        const index2 = error.message.indexOf("403")
        const index3 = error.message.indexOf("500")

        if (index1 !== -1){
            return "Error1";
        }
        if (index2 !== -1){
            return "Error2";
        }
        if (index3 !== -1){
            return "Error3";
        }
    }
}
export default authenticateSignup;
