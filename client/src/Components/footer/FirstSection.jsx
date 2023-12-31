import React from "react"
import { Box, styled } from "@mui/material"
import "./FirstSection.css"

const NewBox = styled(Box)`
    background-color: rgb(34, 32, 32);
    display: flex;
    width: 51%;
    margin-left: 60px;

    @media screen and (max-width: 1100px){
        width: 100vw;
        padding-left: 20px;
    }
`

function FirstSection(){
    return (
        <NewBox>
            <div className ="upper">
                <div className ="first">
                    ABOUT
                </div>
                <ul className ="first">
                    <li className ="first">Contact Us</li>
                    <li className ="first">About Us</li>
                    <li className ="first">Careers</li>
                    <li className ="first">Flipkart Stories</li>
                    <li className ="first">Press</li>
                    <li className ="first">Flipkart Wholesale</li>
                    <li className ="first">Cleartrip</li>
                    <li className ="first">Corporate Information</li>
                </ul>
            </div>
            <div className ="upper">
                <div className ="first">
                    HELP
                </div>
                <ul className ="first">
                    <li className ="first">Payments</li>
                    <li className ="first">Shipping</li>
                    <li className ="first">Cancellation & Returns</li>
                    <li className ="first">FAQ</li>
                    <li className ="first">Report Infringement</li>
                </ul>
            </div>
            <div className ="upper">
                <div className ="first">
                    CONSUMER POLICY
                </div>
                <ul className ="first">
                    <li className ="first">Cancellations & Returns</li>
                    <li className ="first">Terms Of Use</li>
                    <li className ="first">Privacy</li>
                    <li className ="first">Security</li>
                    <li className ="first">Sitemap</li>
                    <li className ="first">Grievance Redressal</li>
                    <li className ="first">EPR Compilance</li>
                </ul>
            </div>
            <div className ="upper">
                <div className ="first">
                    SOCIAL
                </div>
                <ul className ="first">
                    <li className ="first">Facebook</li>
                    <li className ="first">Twitter</li>
                    <li className ="first">Youtube</li>
                </ul>
            </div>
        </NewBox>
    )
}

export default FirstSection;
