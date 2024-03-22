import React from "react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
import { styled }  from "styled-components";

const NewDiv = styled.div `
    background-color: white;
    width: 15.9%;

    @media screen and (max-width : 1100px){
        width: 100%;
    }
`

const Image = styled.img`
    margin-top: 5px;
    margin-left: 40%;
    background-color: white;
`

function FirstSection() {
    return (
        <NewDiv>
            <Link to = {"/"} style ={{
                backgroundColor: "white",
                textDecoration: "none"
            }}>
                <Image className = "firstSectionImage" src={logo} alt="flipkart" />
            </Link>
        </NewDiv>
    )
}

export default FirstSection;