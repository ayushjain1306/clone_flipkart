import React from 'react';
import { Box, Typography, styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions.js";

const MainBox = styled(Box)`
    background-color: white;
    padding-top: 20px;
    border-radius: 3px;
`

const NewBox = styled(Box)`
    display: flex;
    background-color: white;

    @media screen and (max-width: 700px){
        display: block;
        border: 1px solid #d3cccc;
        border-radius: 3px;
        margin: 10px 15px 3% 3%;
        padding-bottom: 10px;
    }
`

const MidBox = styled(Box)`
    display: flex;
    background-color: white;
    align-items: center;
    margin-top: 15px;
`

const FirstBox = styled(Box)`
    background-color: white;
    width: 20%;
    margin-top: 20px;
    margin-left: 2%;
    margin-right: 2%;
    text-align: center;

    @media screen and (max-width: 700px){
        width: 40%;
        margin: auto;
        margin-top: 20px;
    }
`

const SecondBox = styled(Box)`
    background-color: white;
    width: 40%;
    margin-top: 20px;

    @media screen and (max-width: 700px){
        width: 80%;
        margin: auto;
        margin-top: 20px;
    }
`

const ThirdBox = styled(Box)`
    background-color: white;
    width: 40%;
    margin-top: 20px;
    
    @media screen and (max-width: 700px){
        width: 80%;
        margin: auto;
        margin-top: 20px;
    }
`

const AnotherMidBox = styled(Box)`
    background-color: white;
    display: flex;
    margin-top: 10px;
`

function FirstSection({ cartItems }) {
    const date = new Date(new Date().getTime() + 5*24*60*60*1000);
    const dispatch = useDispatch();

    let totalAmount = 0;

    cartItems.forEach(product =>{
        totalAmount += product.price.cost;
    })

    const handleClick = (id) =>{
        dispatch(removeFromCart(id));
    }

    const payment = () =>{
        alert("Payment Successful.");
    }

    return (
        <MainBox>
            {
                cartItems.map(product =>{
                    return (
                        <NewBox key = {product.id}>
                            <FirstBox>
                                <img src={product.url} alt="" style ={{width: "100%", height: "150px"}} />
                            </FirstBox>
                            <SecondBox>
                                <Typography style = {{color: "black", backgroundColor: "white"}}>
                                    {product.title.longTitle}
                                </Typography>

                                <MidBox>
                                    <Typography style = {{color: "black", backgroundColor: "white", marginRight: "10px"}}>
                                        <strike style ={{backgroundColor: "white", color: "grey"}}> ₹{product.price.mrp} </strike>
                                    </Typography>
                                    <Typography style = {{color: "black", backgroundColor: "white", marginRight: "10px", fontSize: "30px"}}>
                                        ₹{product.price.cost} 
                                    </Typography>
                                    <Typography style = {{color: "#388e3c", backgroundColor: "white", marginRight: "0px", fontWeight: "bold"}}>
                                        {product.price.discount} 
                                    </Typography>
                                </MidBox>
                                <AnotherMidBox>
                                    <button style ={{
                                        backgroundColor: "white",
                                        fontSize: "15px",
                                        border: "0px",
                                        cursor: "pointer",
                                        fontWeight: "bold"
                                    }} onClick= {()=>handleClick(product.id)}>REMOVE</button>
                                </AnotherMidBox>
                            </SecondBox>
                            <ThirdBox>
                                <Typography style = {{
                                    color: "black", 
                                    backgroundColor: "white",
                                    fontSize: "15px",
                                    textAlign: "center"
                                }}>
                                    Delivery by {date.toDateString()} | ₹40
                                </Typography>
                            </ThirdBox>
                        </NewBox>
                    )
                })
            }

            <hr style = {{marginTop: "10px"}} />

            <button style ={{
                backgroundColor: "rgb(251, 100, 27)",
                color: "white",
                border: "0px",
                fontSize: "18px",
                padding: "10px 4%",
                float: "right",
                margin: "20px 5%"
            }} onClick= {() => payment()}>
                PLACE ORDER
            </button>
        </MainBox>
    )
}

export default FirstSection;