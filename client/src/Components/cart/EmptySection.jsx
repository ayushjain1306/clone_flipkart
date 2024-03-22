import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
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

    @media screen and (max-width: 1100px){
        font-size: 15px;
    }
`

const NewImage = scStyled.img`
    margin-top: 20px;
    width: 30%;

    @media screen and (max-width: 1100px){
        width: 60%;
    }
`

function EmptySection(){
    return (
        <NewBox>
            <NewImage src={noitem} alt="NoItem" />
            <NewTypo>
                No items have been added to the cart.
            </NewTypo>
        </NewBox>
    )
}

export default EmptySection;