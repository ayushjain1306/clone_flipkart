import React from "react";
import { Box, Typography, styled } from "@mui/material";

const NewTypo = styled(Typography)`
    background-color: white;
    padding-top: 10px;
    padding-left: 5%;
    font-weight: bold;
`

const NewBox = styled(Box)`
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 10px 5%;
`

const AnotherTypo = styled(Typography)`
    background-color: white;
    color: black;
`

const LastTypo = styled(Typography)`
    background-color: white;
    color: #388e3c;
    padding: 10px 5%;
`

function SecondSection({ cartItems }) {
    let totalCost = 0; 
    let discount = 0;
    let delivery = 0;

    cartItems.map(product => {
        totalCost += product.price.cost;
        discount += product.price.mrp - product.price.cost;
    })

    if (totalCost < 1000){
        delivery = 40;
    }

    return (
        <>
            <NewTypo>
                PRICE DETAILS
            </NewTypo>
            <hr style ={{border: "0.5px solid #dbd8d8"}} />
            
            <NewBox>
                <AnotherTypo>Price ({cartItems.length} items)</AnotherTypo>
                <AnotherTypo>₹{totalCost}</AnotherTypo>
            </NewBox>
            <NewBox>
                <AnotherTypo>Discount</AnotherTypo>
                <AnotherTypo>- ₹{discount}</AnotherTypo>
            </NewBox>
            <NewBox>
                <AnotherTypo>Delivery Charges</AnotherTypo>

                {
                    delivery === 40 ?
                    <AnotherTypo>₹40</AnotherTypo>
                    :
                    <AnotherTypo style ={{color: "#388e3c"}}>Free</AnotherTypo>
                }
            </NewBox>

            <hr style = {{border: "none", borderTop: "1px dashed #dbd8d8", padding: "0px 5%"}} />

            <NewBox>
                <AnotherTypo>Total Amount</AnotherTypo>
                <AnotherTypo>₹{totalCost + delivery}</AnotherTypo>
            </NewBox>

            <hr style = {{border: "none", borderTop: "1px dashed #dbd8d8", padding: "0px 5%"}} />
            
            <LastTypo>You will save ₹{discount} on this order.</LastTypo>
        </>
    )
}

export default SecondSection;