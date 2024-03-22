import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, styled, Typography } from "@mui/material";
import { styled as scStyled } from "styled-components";
import buyNow from "./images/buyNow.png";
import cart from "./images/addToCart.png";
import { addToCart } from "../../redux/actions/cartActions.js";

const NewBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin-top: 10px;
`

const NewButton = scStyled.button`
    background-color: #ff9f00;
    width: 40%;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0px;
    padding: 10px 0px;
    margin: 0px 2%;
    cursor: pointer;
`

function Buttons({id, price}) {
    const [quantity, setQuantity] = useState(1);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate("/cart");
    }

<<<<<<< HEAD
    const payment = () =>{
        alert("Payment Successful.");        
=======
    const payment = async() =>{
        alert("Payment Successful.");
>>>>>>> 826cd04902aa2460e9e372ecc1970e072d47ccad
    }

    return (
        <NewBox>
            <NewButton onClick = {() => addItemToCart()}>
                <img src={cart} alt="" />
                <Typography style = {{
                    background: "#ff9f00", 
                    color: "white",
                    marginLeft: "2%",
                    fontWeight: "bold"
                }}>
                    ADD TO CART 
                </Typography>
            </NewButton>

            <button style ={{
                background: "#fb641b",
                width: "40%",
                fontSize: "20px",
                display: "flex",
                justifyContent: "center",
                border: "0px",
                padding: "10px 0px",
                margin: "0px 2%"
            }} >
                <img src={buyNow} alt= "" />
                <Typography style = {{
                    background: "#fb641b", 
                    color: "white",
                    fontWeight: "bold",
                    marginLeft: "2%",
                    cursor: "pointer"
                }} onClick = {() => payment()}>
                    BUY NOW
                </Typography>
            </button>
        </NewBox>
    )
}

export default Buttons;
