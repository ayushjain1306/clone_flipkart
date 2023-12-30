const express = require('express')
const {userSignup, userLogin, returnName} = require('../controller/userController.js');
const {sendOTP, checkOTP} = require('../controller/sendOTP.js');
const {getProducts, getProductById} = require('../controller/productController.js');
const {addPaymentGateway, paymentVerification} = require("../controller/paymentController.js");

const router = express.Router();

router.get('/', (request, response) => {
    res.json("Hello");
});

router.post('/signup', userSignup);
router.post('/login', userLogin);
router.post('/sendOTP', sendOTP);
router.post('/checkOTP', checkOTP);
router.post('/getName', returnName);

router.get('/products', getProducts);
router.get('/products/:id', getProductById);

router.post('/payment', addPaymentGateway);
router.post('/paymentverification', paymentVerification);
router.get('/getkey', (request, response) =>
    response.status(200).json({key: process.env.RAZORPAY_API_KEY})
)

module.exports = router;
