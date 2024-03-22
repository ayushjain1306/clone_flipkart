import React, {useState, useContext} from "react"
import { styled } from "styled-components"
import { Link } from "react-router-dom"
import DialogBox from "./DialogBox.jsx"
import seller from "./images/becomeSeller.jpg"
import login from "./images/login.jpg"
import dropDown from "./images/dropDown.jpg"
import cart from "./images/cart.jpg"
import options from "./images/options.jpg"
import { DataContext } from "../../context/DataProvider.jsx"
import { Typography, styled as scStyled } from "@mui/material"
import LogOutBox from "./LogOutBox.jsx"

const Typo = scStyled(Typography)`
    color: black;
    margin: 0px 10px;
    background-color: white;
`

const NewDiv = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 40.5%;

    @media screen and (max-width : 1100px){
        width: 90%;
        margin-top: 10px;
        margin-left: 8%;
        margin-right: 2%;
    }
`

const AnotherBox = styled.div`
    background-color: white;
    margin-left: 5%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1100px){
        margin-left: 0px;
    }
`

const Image = styled.img`
    height: 20px;
    width: 20px;
    margin-top: 2.5px;
`

const Heading3 = styled.h3`
    color: black;
    background-color: white;
    font-weight: 500;
    margin-left: 10px;
    margin-top: 3px;
    font-size: 16px;
    font-family: Arial;
`

const NewButton = styled.button `
    border: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    baxkground-color: white;
    background-color: white;
    margin-left: 5%;
    border-radius: 10px;
    cursor: pointer;
    width: 25%;

    @media screen and (max-width: 500px){
        margin-left: 0px;
        margin-right: 5%;
    }

    @media screen and (min-width: 500px) and (max-width: 1100px){
        margin-left: 3%;
        margin-right: 3%;
    }
`

const AnotherButton = styled.button`
    background-color: white;
    border: "0px";
    margin-left: "5%";
    margin-right: 4%;
`

const NewBox = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    background-color: white;
`

const AnotherDiv = styled.div`
    color: white;
    border-radius: 50%;
    background-color: #2874f0;
    height: 30px;
    width: 30px;
    font-size: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NewImage = styled.img`
    height: 22px;
    width: 22px;
`

const AnotherImage = styled.img`
    color: black;
    background-color: white;
    margin-left: 3%;
    font-size: 16px;
    font-weight: normal;
`

const AnotherHeading3 = styled.h3`
    margin-left: 3%;
    height: 10px;
    width: 10px;
`

const Div = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
`

const NewLink = scStyled(Link)`
    background-color: white;
    color: black;
    text-decoration: none;
    display: flex;
`

const AnotherImage2 = styled.img`
    height: 30px;
    width: 30px;
`

const AnotherHeading2 = styled.h3`
    background-color: white;
    color: black;
    font-size: 16px;
    margin-top: 3px;
    font-weight: normal;
    font-family: Arial;
    margin-left: 5%;
       margin-left: 3%;
       margin-right: 3%;
    }
`

const SellerDiv = styled.div `
    background-color: white;
    margin-left: 5%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1100px){
        margin-left: 0px;
    }
`

function ThirdSection(){
    const [open, setOpen] = useState(false);
    const [logOpen, setLogOpen] = useState(false);

    const {account} = useContext(DataContext);

    const array = account.split(" ");


    const handleOpen = ()=> {
        setOpen(true);
    }

    const handleLogOpen = ()=> {
        setLogOpen(true);
    }

    return (
        <NewDiv>
            <AnotherBox className = "seller">
                <SellerDiv className = "seller">
                    <Image src={seller} alt="" />
                    <Heading3>Become a Seller</Heading3>
                </SellerDiv>
            </AnotherBox>

            {
                account ?
                <>
                    <AnotherButton onClick= {()=> handleLogOpen()}>
                        <NewBox>
                            <AnotherDiv>{array[0][0].toUpperCase()}</AnotherDiv>
                            <Typo>{array[0]}</Typo>
                        </NewBox>
                    </AnotherButton>
                    <LogOutBox logOpen = {logOpen} setLogOpen = {setLogOpen} />
                </>
                :
                <NewButton onClick = {()=>handleOpen()}>
                    <NewImage src={login} alt="Sign In" />
                    <AnotherHeading3>Login</AnotherHeading3>
                    <AnotherImage src={dropDown} alt="" />
                </NewButton>
            }


            <Div style ={{marginLeft: "1%"}}>
                <NewLink to= "/cart">
                    <NewImage src={cart} alt="cart" />
                    <AnotherHeading2>Cart</AnotherHeading2>
                </NewLink>
            </Div>

            <Div style ={{marginLeft: "9%"}}>
                <AnotherImage2 src={options} alt="options" />
            </Div>

            <DialogBox open = {open} setOpen = {setOpen} />
            
        </NewDiv>
    )
}

export default ThirdSection;
