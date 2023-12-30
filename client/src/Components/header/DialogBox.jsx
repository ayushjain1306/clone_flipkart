import React, { useState, useContext } from "react"
import { Dialog, Box, Input, Typography, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import authenticateSignup, {authenticateLogin} from "../../service/api.js"
import sendOTP, {checkOTP} from "../../service/otpApi.js"
import { DataContext } from "../../context/DataProvider.jsx";

const NewDialog = styled(Dialog)`
    height: 80%;
    width: 50%;
    margin: auto;

    @media screen and (max-width: 1100px){
        width: 85%;
    }
`

const NewBox = styled(Box)`
    display: flex;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 1100px){
        display: block;
    }
`

const FirstBox = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 45%;

    @media screen and (max-width: 1100px){
        background: #2874f0;
        width: 100%;
    }
`

const FirstLoginTypo = styled(Typography)`
    background-color: #2874f0;
    color: white;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 30px;
    margin-bottom: 15px;

    @media screen and (max-width: 1100px){
        margin-top: 25px;
        margin-bottom: 25px;
    }
`

const SecondLoginTypo = styled(Typography)`
    background-color: #2874f0;
    color: whitesmoke;
    margin-left: 20px;

    @media screen and (max-width: 1100px){
        display: none;
    }
`

const ThirdLoginTypo = styled(Typography)`
    background-color: #2874f0;
    color: whitesmoke;
    margin-left: 20px;

    @media screen and (max-width: 1100px){
        display: none;
    }
`

const SecondBox = styled(Box)`
    width: 55%;

    @media screen and (max-width: 1100px){
        width: 100%;
    }
`

const NewInput = styled(Input)`
    margin: 20px 20px 5px 20px;
    width: 87%;

    @media screen and (max-width: 1100px){
        margin: 10px 4%;
        width: 92%;
        font-size: 15px;
    }
`

const Typo = styled(Typography)`
    color: red;
    font-size: 12px;
    margin-left: 20px;
    margin-bottom: 10px;

    @media screen and (max-width: 1100px){
        width: 92%;
        margin-left: 4%;
        margin-right: 4%;
    }
`

const TermsTypo = styled(Typography)`
    font-size: 10px;
    margin-left: 20px;

    @media screen and (max-width: 1100px){
        width: 92%;
        margin-left: 4%;
        margin-right: 4%;
    }
`

const Button = scStyled.button`
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 10px;
    background-color: orange;
    border: 0px;
    cursor: pointer;
    color: white;
    width: 87%;
    margin-bottom: 10px;
    font-size: 15px;

    @media screen and (max-width: 1100px){
        width: 92%;
        margin-left: 4%;
        margin-right: 4%;
    }
`

const FirstSignInTypo = styled(Typography)`
    background-color: #2874f0;
    color: white;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 30px;
    margin-bottom: 15px;

    @media screen and (max-width: 1100px){
        margin-left: 10px;
        font-size: 20px;
        margin-bottom: 20px;
    }
`

const SecondSignInTypo = styled(Typography)`
    background-color: #2874f0;
    color: whitesmoke;
    margin-left: 20px;

    @media screen and (max-width: 1100px){
        display: none;
    }
`

const NewButton = scStyled.button`
    width: 87%;
    margin-left: 20px;
    color: #2874f0;
    padding: 10px;
    font-size: 15px;
    border: 0px;
    box-shadow: 1px 1px 1px 1px lightgrey;
    background-color: whitesmoke;
    margin-bottom: 15px;
    cursor: pointer;

    @media screen and (max-width: 1100px){
        width: 92%;
        margin-left: 4%;
        margin-right: 4%;
    }
`

const accountSetting = {
    login: {
        view: "login",
    },
    signup: {
        view : "signup"
    }
}

const signupDetails ={
    name: "",
    mobile: "",
    email: "",
    password: "", 
    username: ""
}

const loginDetails ={
    email: ""
}

const otpDetails ={
    otp: ""
}

function DialogBox({open, setOpen}) {
    const [account, toggleAccount] = useState(accountSetting.login);
    const [signup, setSignup] = useState(signupDetails);
    const [errorMessage, setErrorMessage] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [login, setLogin] = useState(loginDetails);
    const [loginMessage, setLoginMessage] = useState("");
    const [loginStatus, setLoginStatus] = useState(false);
    const [otp, setOTP] = useState(otpDetails);
    const [otpMessage, setOTPMessage] = useState("");
    const [name, setName]= useState("");

    const {setAccount} = useContext(DataContext);

    const handleToggleAccount = (value)=>{
        if (value === "signup"){
            toggleAccount(accountSetting.signup);
            setLoginMessage("");
        }
        else {
            toggleAccount(accountSetting.login);
            setErrorMessage("");
            setEmailMessage("");
        }
    }

    const handleClose = () =>{
        setOpen(false);
        setErrorMessage("");
        setEmailMessage("");
        setLoginMessage("");
        toggleAccount(accountSetting.login);
        setLoginStatus(false);
        setOTPMessage("");
    }

    const onInputChange = (e)=>{
        setSignup({...signup, [e.target.name]: e.target.value})
    }

    const onLoginInputChange = (e)=>{
        setLogin({...login, [e.target.name]: e.target.value})
    }

    const otpChange = (e)=>{
        setOTP({...otp, [e.target.name]: e.target.value})
    }

    const connectionLogin = async ()=>{
        let response = await authenticateLogin(login);
        
        if (response === "Error1"){
            setLoginMessage("User with the given email doesn't exists!")
            setLoginStatus(false);
        }
        else {
            await sendOTP(login);
            let loginName = response.data.data.name;
            setName(loginName);
            setLoginStatus(true);
            setLoginMessage("");
        }
    }

    const connectionSignup = async ()=>{
        let response = await authenticateSignup(signup);

        if (response === "Error1"){
            setErrorMessage("Username already exists!")
            setEmailMessage("")
        }
        else if (response === "Error2"){
            setEmailMessage("This e-mail cannot be used. Account already exists!")
            setErrorMessage("");
        }
        else {
            handleClose();
            setAccount(signup.name);
        }
    }

    const validateOTP = async() =>{
        let response = await checkOTP(otp);
        
        if (response === false){
            setOTPMessage("Wrong OTP! Try Again")
        }
        else{
            setOTPMessage("");
            setAccount(name);
            handleClose();
        }
    }

    return(
        <NewDialog open = {open} onClose= {()=>handleClose()}>
            {
                account.view === "login" ?
                <NewBox>
                    <FirstBox>
                        <FirstLoginTypo>Login</FirstLoginTypo>
                        <SecondLoginTypo>Get access to you Orders,</SecondLoginTypo>
                        <ThirdLoginTypo>Wishlists and Recommendations</ThirdLoginTypo>
                    </FirstBox>
                    <SecondBox>
                        <NewInput variant="standard" placeholder="Enter your Email address" required name="email" onChange = {(e)=>onLoginInputChange(e)} />

                        <Typo>{loginMessage}</Typo>
    
                        <TermsTypo>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</TermsTypo>

                        {loginStatus 
                        ?
                        <>
                            <Button onClick = {()=> connectionLogin()} >Request OTP</Button>

                            <TermsTypo>OTP has been successfully send on given email.</TermsTypo>

                            <NewInput variant="standard" placeholder="Enter OTP" required name = "otp" onChange= {(e) => otpChange(e)} />

                            <Typo>{otpMessage}</Typo>

                            <Button onClick = {()=> validateOTP()} >Submit OTP</Button>
        
                            <Typography style ={{
                                marginTop: "25px",
                                marginBottom: "30px",
                                textAlign: "center",
                                fontSize: "13px",
                                color: "#2874f0",
                                cursor: "pointer"
                            }} onClick={()=>handleToggleAccount("signup")}>
                                New to Flipkart? Create an account
                            </Typography>
                        </>
                        
                        :
                        <>
                            <Button onClick = {()=> connectionLogin()} style ={{marginBottom: "110px"}} >Request OTP</Button>

                            <Typography style ={{
                                marginTop: "100px",
                                marginBottom: "25px",
                                textAlign: "center",
                                fontSize: "13px",
                                color: "#2874f0",
                                cursor: "pointer"
                            }} onClick={()=>handleToggleAccount("signup")}>
                                New to Flipkart? Create an account
                            </Typography>
                        </>
                        }
                    </SecondBox>
                </NewBox>
                :
                <NewBox>
                    <FirstBox>
                        <FirstSignInTypo>Looks like you're new here!</FirstSignInTypo>
                        <SecondSignInTypo>Sign up with your mobile number</SecondSignInTypo>
                        <SecondSignInTypo>to get started</SecondSignInTypo>
                    </FirstBox>
                    <SecondBox>
                        <NewInput variant="standard" placeholder="Enter your Name"  required name ="name" onChange={(e) => onInputChange(e)} />

                        <NewInput variant="standard" placeholder="Enter Mobile Number" required name ="mobile" onChange={(e) => onInputChange(e)} />

                        <NewInput variant="standard" placeholder="Enter Email"  required name ="email" onChange={(e) => onInputChange(e)} />
                        <Typo>{emailMessage}</Typo>

                        <NewInput variant="standard" placeholder="Enter Username" required name ="username" onChange={(e) => onInputChange(e)} /> 
                        <Typo>{errorMessage}</Typo>

                        <NewInput variant="standard" placeholder="Enter your Password" required name ="password" onChange={(e) => onInputChange(e)} /> 
    
                        <TermsTypo>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</TermsTypo>
    
                        <Button onClick= {()=> connectionSignup()}>CONTINUE</Button>

                        <NewButton style ={{
                            
                        }} onClick = {() => handleToggleAccount("login")}>
                            Existing User? Log in
                        </NewButton>
    
                        
                    </SecondBox>
                </NewBox>
            }         
        </NewDialog>
    )
}

export default DialogBox;