import React from "react"
import {Box} from "@mui/material"
import "./SecondSection.css";

function SecondSection() {
    return (
        <Box style ={{
            display: "flex",
            backgroundColor: "rgb(34, 32, 32)",
            marginLeft: "20px"
        }}>
            <div className ="upper2">
                <div className = "first">
                    Mail Us: 
                </div>
                <ul className = "first">
                    <li className = "first">Flipkart Internet Private Limited,</li>
                    <li className = "first">Buildings Alyssa, Begonia &</li>
                    <li className = "first">Clove Embassy Tech Village</li>
                    <li className = "first">Outer Ring Road, Devarabeesanahalli Village,</li>
                    <li className = "first">Bengaluru, 560103,</li>
                    <li className = "first">Karnatka, India</li>
                </ul>
            </div>
            <div className = "upper2" style ={{
                marginLeft: "20px"
            }}>
                <div className = "first">
                    Registered Office Address: 
                </div>
                <ul className = "first">
                    <li className = "first">Flipkart Internet Private Limited,</li>
                    <li className = "first">Buildings Alyssa, Begonia &</li>
                    <li className = "first">Clove Embassy Tech Village</li>
                    <li className = "first">Outer Ring Road, Devarabeesanahalli Village,</li>
                    <li className = "first">Bengaluru, 560103,</li>
                    <li className = "first">Karnatka, India</li>
                    <li className = "first">CIN: U511098KA2012PTC066107</li>
                    <li className = "first">Telephone: 044-45614700</li>
                </ul>
            </div>
        </Box>
    )
}

export default SecondSection;