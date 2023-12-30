import React from "react"
import discount from "./images/discount.jpg";
import { Box, styled } from "@mui/material";

const NewBox = styled(Box) `
    margin: 0px 15px 15px 15px;

    @media screen and (max-width : 700px){
        display: none;
    }
`

function Discount(){
    return (
        <NewBox>
            <img src={discount} alt="image" style ={{
                width: "100%"
            }} />
        </NewBox>
    )
}

export default Discount;