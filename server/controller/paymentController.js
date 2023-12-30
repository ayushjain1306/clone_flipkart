const Razorpay = require("razorpay");

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET
})

async function addPaymentGateway(request, response){
    try {
        const options = {
            amount: 50000,
            currency: "INR"
        };
    
        const order = await instance.orders.create(options);
    
        response.status(200).json({success: true, order})
    }
    catch (error){
        response.status(500).json({error: error.message});
    }
}

async function paymentVerification(request, response){
    res.status(200).json({success: true});
}

module.exports = {
    addPaymentGateway,
    paymentVerification
};