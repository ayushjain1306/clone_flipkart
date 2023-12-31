import React from "react";
import { Box, styled, Grid } from "@mui/material";
import Header from "../details/Header.jsx";
import { useSelector } from "react-redux";
import Slider from "../body/Slider.jsx";
import FirstSection from "./FirstSection.jsx";
import SecondSection from "./SecondSection.jsx";
import EmptySection from "./EmptySection.jsx";

const NewBox = styled(Box)`
    margin-top: 80px;

    @media screen and (max-width: 1100px){
        margin-top: 155px;
    }
`
const NewGrid1 = styled(Grid)`
    background-color: white;
    margin-left: 3%;

    @media screen and (max-width: 700px){
        margin-left: 0px;
        margin-bottom: 15px;
    }
`

const NewGrid2 = styled(Grid)`
    background-color: whitesmoke;
    margin-left: 2%;
    
    @media screen and (max-width: 700px){
        margin-left: 0px;
    }
`

function Cart() {
    const { cartItems } = useSelector(state => state.cart);
    const { products } = useSelector(state => state.getProducts);

    return (
        <>
            <Header />

            <NewBox>
                {
                    cartItems ? &&
                        <Grid container style = {{
                            marginBottom: "15px"
                        }}>
                            <NewGrid1 item lg={8} md = {8} sm = {12} xs = {12}>
{/*                                 <FirstSection cartItems = {cartItems} /> */}
                            </NewGrid1>
                            <NewGrid2 item lg={3} md = {3} sm = {12} xs = {12}>
                                <SecondSection cartItems = {cartItems} />
                            </NewGrid2>
                        </Grid>
                    :
                    <EmptySection />
                }
            </NewBox>
            <Slider title = "More Products" products = {products} />
        </>
    )
}

export default Cart;
