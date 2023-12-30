import React from "react";
import {Box, styled, Typography} from "@mui/material";
import Buttons from "./Buttons.jsx";
import ProductTable from "./ProductTable.jsx";
import offer from "./images/offer.png";
import coins from "./images/coins.png";

const NewBox = styled(Box)`
    margin-top: 80px;
    display: flex;
    justify-content: space-evenly;
    margin-left: 1%;
    margin-right: 1%;
    background-color: white;

    @media screen and (max-width: 700px){
        margin-top: 155px;
        margin-left: 0px;
        margin-right: 0px;
        margin-bottom: 15px;
        width: 100vw;
        display: block;
        padding-top: 20px;
        padding-bottom: 1px;
    }
`

const FirstBox = styled(Box)`
    background-color: white;
    width: 40%;
    margin-top: 25px;
    text-align: center;
    margin-bottom: 25px;

    @media screen and (max-width: 700px){
        width: 95%;
        margin: auto;
    }
`

const SecondBox = styled(Box)`
    background-color: white;
    width: 55%;
    margin-top: 35px;

    @media screen and (max-width: 700px){
        width: 90%;
        margin: auto;
        margin-top: 25px;
    }
`

const FirstTypo = styled(Typography)`
    background-color: white;
    color: black;
    font-size: 23px;
`

const SecondTypo = styled(Typography)`
    background-color: white;
`

const ThirdTypo = styled(Typography)`
    background-color: white;
    font-size: 35px;
    color: black;
    margin-right: 2%;
`

const FourthTypo = styled(Typography)`
    background-color: white;
    font-size: 20px;
    margin-right: 2%;
`

const FifthTypo = styled(Typography)`
    background-color: white;
    font-size: 20px;
    color: #388e3c;
`

const SixthTypo = styled(Box)`
    background-color: white;
    font-size: 14px;
    color: black;
    display: flex;
    align-Items: center;
`

function BodyDetails({ loading, product }){
    const emiPrice = Math.ceil(0.0833*product.price.cost);
    return (
        <NewBox>
            <FirstBox>
                <Box style ={{
                    border: "1px solid whitesmoke",
                    backgroundColor: "white",
                    margin: "0px 2%"
                }}>
                    <img src={product.detailUrl} alt="Product" style ={{
                        width: "80%",
                        height: "400px",
                        padding: "20px",
                        backgroundColor: "white"
                    }} />
                </Box>
                
                <Buttons id = {product.id} price = {product.price.cost} />
                
            </FirstBox>
            <SecondBox>
                <FirstTypo>
                    {product.title.longTitle}
                </FirstTypo>
                <SecondTypo>
                    2412 Ratings & 500 Reviews
                </SecondTypo>

                <Box style ={{
                    backgroundColor: "white",
                    display: "flex",
                    marginTop: "20px",
                    alignItems: "center"
                }}>
                    <ThirdTypo>
                        ₹{product.price.cost}
                    </ThirdTypo>
                    <FourthTypo>
                        <strike style ={{backgroundColor: "white"}}>₹{product.price.mrp}</strike>
                    </FourthTypo>
                    <FifthTypo>
                        {product.price.discount} Off
                    </FifthTypo>
                </Box>

                <Typography style ={{backgroundColor: "white", fontWeight: "bold", marginTop: "20px", marginBottom: "10px", fontSize: "17px", color: "black"}}>
                    Available Offers
                </Typography>

                <SixthTypo>
                    <img src={offer} alt= "bullet" style= {{marginRight: "2%"}} />
                    <div style ={{backgroundColor: "white"}}>
                        <b style = {{backgroundColor: "white"}}>Bank Offer </b> 10% off on HDFC Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹7,500 and above
                    </div>
                </SixthTypo>
                <SixthTypo>
                    <img src={offer} alt= "bullet" style= {{marginRight: "2%"}} />
                    <div style ={{backgroundColor: "white"}}>
                        <b style = {{backgroundColor: "white"}}>Bank Offer </b> 10% off on Canara Bank Credit Card Transactions, up to ₹1,500 on orders of ₹5,000 and above
                    </div>
                </SixthTypo>
                <SixthTypo>
                    <img src={offer} alt= "bullet" style= {{marginRight: "2%"}} />
                    <div style ={{backgroundColor: "white"}}>
                        <b style = {{backgroundColor: "white"}}>Bank Offer </b> 5% Cashback on Flipkart Axis Bank Card
                    </div>
                </SixthTypo>
                <SixthTypo>
                    <img src={offer} alt= "bullet" style= {{marginRight: "2%"}} />
                    <div style ={{backgroundColor: "white"}}>
                        Buy for 150 get ₹100 off your Next Buy
                    </div>
                </SixthTypo>

                {
                    product.price.cost > 4000 
                    ?
                    <SixthTypo>
                        <img src={offer} alt= "bullet" style= {{marginRight: "2%"}} />
                        <div style ={{backgroundColor: "white"}}>
                            <b style = {{backgroundColor: "white"}}>No cost EMI ₹{emiPrice}/month.</b> Standard EMI also available
                        </div>
                    </SixthTypo>
                    :
                    <div style ={{backgroundColor: "white"}}> </div>
                }

                <img src={coins} alt="SuperCoins" style ={{
                    marginTop: "30px"
                }} />

                <ProductTable product = {product} />
                
            </SecondBox>
        </NewBox>
    )
}

export default BodyDetails;