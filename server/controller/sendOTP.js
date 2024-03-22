import nodemailer from 'nodemailer';
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const otpGenerator = ()=>{
    return Math.floor(1000 + Math.random()*9000).toString();
}

const otp = otpGenerator();

async function checkOTP(request, response){
    try {
        let newOTP = request.body.otp;

        if (newOTP === otp.toString()){
            return response.status(200).json({
                message: true
            })
        }
        else {
            return response.status(401).json({
                message: false
            })
        }
    }
    catch (error){
        console.log(error);
    }
}

async function sendOTP(request, response) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: USERNAME,
                pass: PASSWORD
            }
        });

        const email = request.body.email;

        const mailOptions = {
            from: USERNAME,
            to: email,
            subject: 'Your OTP',
            text: `Your OTP is ${otp}`
        };

        await transporter.sendMail(mailOptions, (error, info)=>{
            if (error){
                console.log(error);
                response.json({
                    success: false,
                    message: "Failed to send OTP"
                })
            }
            else {
                // console.log("Email sent: " + info.response);
                response.json({
                    message: otp
                })
            }
        });
    }
    catch (error){
        console.log(error);
    }
}

export {
    sendOTP,
    checkOTP
};