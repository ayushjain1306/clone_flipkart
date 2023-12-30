import axios from "axios";
import logo from "../Components/details/images/logo.png";

const URL = "clone-flipkart-mern.vercel.app";

async function payUsingRazorpay(price) {
    try{
        const key = "rzp_test_Ra1KJPltvrt1fq";

        const { data } = await axios.post(`${URL}/payment`, {price});

        const options = {
            key, 
            amount: data.order.amount,  
            currency: "INR",
            name: "flipkart", 
            description: "Test Transaction",
            image: logo,
            order_id: "order_9A33XWu170gUtm",  
            callback_url: `${URL}/paymentverification`,
            prefill: { 
                "name": "Gaurav Kumar", 
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" 
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#3399cc"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }
    catch(error){
        console.log(error);
    }
}

export default payUsingRazorpay;
