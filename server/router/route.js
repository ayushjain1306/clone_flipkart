import express from "express"
import {userSignup, userLogin, returnName} from '../controller/userController.js';
import {sendOTP, checkOTP} from '../controller/sendOTP.js';
import {getProducts, getProductById} from '../controller/productController.js';
import {addPaymentGateway, paymentVerification} from "../controller/paymentController.js";

const router = express.Router();

router.get('/', (request, response) => {
    response.json("Hello from server");
})

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

export default router;