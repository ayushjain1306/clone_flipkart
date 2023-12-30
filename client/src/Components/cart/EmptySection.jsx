import React from "react";
import { Box, Typography, styled } from "@mui/material"
import noitem from "./images/noitem.png";

const NewBox = styled(Box)`
    background-color: white;
    text-align: center;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 20px;
    padding-bottom: 20px;
`

const NewTypo = styled(Typography)`
    background-color: white;
    color: black;
    font-size: 20px;
`

function EmptySection(){
    return (
        <NewBox>
            <img src={noitem} alt="NoItem" style ={{
                marginTop: "20px",
                width: "30%"
            }} />
            <NewTypo>
                No items have been added to the cart.
            </NewTypo>
        </NewBox>
    )
}

export default EmptySection;