import React from "react"
import { styled } from "styled-components"
import FirstSection from "./FirstSection.jsx"
import SecondSection from "./SecondSection.jsx"
import ThirdSection from "./ThirdSection.jsx"

const NewDiv = styled.div`
    background-color: rgb(34, 32, 32);
    color: white;
    display: flex;
    padding-top: 30px;

    @media screen and (max-width: 1100px){
        display: block;
    }
`

const FirstHR = styled.hr`
    border: 0.1px solid grey;

    @media screen and (max-width: 1100px){
        border: 0.1px rgb(34, 32, 32);
        margin-bottom: 40px;
    }
`

function Footer() {
    return (
        <footer style ={{
            backgroundColor: "rgb(34, 32, 32)",
        }}>
            <NewDiv>
                <FirstSection />
                <FirstHR />
                <SecondSection />
            </NewDiv>
            <hr style ={{
                border: "0.1px solid grey",
                marginTop: "40px"
            }} />
            <div style ={{
                color: "white"
            }}>
                <ThirdSection />
            </div>
        </footer>
    )
}

export default Footer;