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

function FirstSection() {
    return (
        <NewDiv>
            <Link to = {"/"} style ={{
                backgroundColor: "white",
                textDecoration: "none"
            }}>
                <img className = "firstSectionImage" src={logo} alt="flipkart" style ={{
                    marginTop: "5px",
                    marginLeft: "40%",
                    backgroundColor: "white",
                }} />
            </Link>
            
        </NewDiv>
    )
}

export default FirstSection;