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
import { Typography } from "@mui/material"
import LogOutBox from "./LogOutBox.jsx"

const NewDiv = styled.div `
    display: flex;
    align-items: center;
    background-color: white;
    width: 40.5%;

    @media screen and (max-width : 1100px){
        width: 90%;
        margin-top: 10px;
        margin-left: 8%;
        margin-right: 2%;
    }
`

const NewButton = styled.button `
    border: 0px;
    display: flex;
    align-items: center;
    background-color: white;
    margin-left: 5%;
    border-radius: 10px;
    cursor: pointer;
    width: 25%;

    @media screen and (max-width: 1100px){
        margin-left: 0px;
        margin-right: 5%;
    }
`

const SellerDiv = styled.div `
    background-color: white;
    margin: 0px 0px 5% 0px;
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
            <SellerDiv className = "seller" style = {{
                backgroundColor: "white",
                marginTop: "0px",
                marginLeft: "5%",
                marginRight: "0px",
                marginBottom: "0px",
                display: "flex",
                alignItems: "center"
            }}>
                <img src={seller} alt="" style ={{
                    height: "20px",
                    width: "20px",
                    marginTop: "2.5px"
                }} />
                <h3 style ={{
                    color: "black",
                    backgroundColor: "white",
                    fontWeight: "500",
                    marginLeft: "10px",
                    fontSize: "16px",
                    fontFamily: "Arial",
                    marginTop: "3px"
                }}>Become a Seller</h3>
            </SellerDiv>

            {
                account ?

                <>
                    <button style={{
                        backgroundColor: "white",
                        border: "0px",
                        marginLeft: "5%",
                        marginRight: "4%"
                    }} onClick= {()=> handleLogOpen()}>
                        <div style ={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "white",
                            height: "100%"
                        }}>
                            <div style ={{
                                color: "white",
                                borderRadius: "50%",
                                backgroundColor: "#2874f0",
                                height: "30px",
                                width: "30px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "17px",
                            }}>
                                {array[0][0].toUpperCase()}
                            </div>
                            <Typography style ={{
                                color: "black",
                                margin: "0px 10px",
                                backgroundColor: "white"
                            }}>
                                {array[0]}
                            </Typography>
                        </div>
                    </button>
                    <LogOutBox logOpen = {logOpen} setLogOpen = {setLogOpen} />
                </>

                
                
                :
                <NewButton onClick = {()=>handleOpen()}>
                    <img src={login} alt="Sign In" style={{
                        height: "22px",
                        width: "22px",
                    }} />
                    <h3 style ={{
                        color: "black",
                        backgroundColor: "white",
                        fontWeight: "normal",
                        marginLeft: "3%",
                        fontSize: "16px",
                    }}>Login</h3>
                    <img src={dropDown} alt="" style={{
                        height: "10px",
                        width: "10px",
                        marginLeft: "3%"
                    }} />
                </NewButton>
            }


            <div style ={{
                backgroundColor: "white",
                marginLeft: "1%",
                display: "flex",
                alignItems: "center"
            }}>
                <Link to= "/cart" style ={{
                    backgroundColor: "white",
                    display:"flex",
                    textDecoration: "none",
                    color: "black"
                }}>
                    <img src={cart} alt="cart" style ={{
                        height: "25px",
                        width: "25px"
                    }} />
                    <h3 style={{
                        backgroundColor: "white",
                        color: "black",
                        fontSize: "16px",
                        marginTop: "3px",
                        fontWeight: "normal",
                        fontFamily: "Arial",
                        marginLeft: "5%"
                    }}>Cart</h3>
                </Link>
            </div>

            <div style={{
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                marginLeft: "9%",
            }}>
                <img src={options} alt="options" style ={{
                    height: "30px",
                    width: "30px"
                }} />
            </div>

            <DialogBox open = {open} setOpen = {setOpen} />
            
        </NewDiv>
    )
}

export default ThirdSection;
