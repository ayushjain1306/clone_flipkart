import React from "react";
import {AppBar, Toolbar, styled} from "@mui/material"
import FirstSection from "./FirstSection.jsx"
import SecondSection from "./SecondSection.jsx"
import ThirdSection from "./ThirdSection.jsx"

const Appbar = styled(AppBar)`
    background-color: white;
    width: 100vw;
    left: 0px;
    box-shadow: 0px 0px 0px 0px;

    @media screen and (max-width: 1100px){
        width: 100vw;
    }
`

const ToolBar = styled(Toolbar)`
    margin: 0px;
    padding: 0px;
    background-color: white;
    
    @media screen and (max-width: 1100px){
        padding: 0px;
        margin: 0px;
        width: 100vw;
        display: block;
    }
`

function Header() {
    return(
        <Appbar>
            <ToolBar>
                <FirstSection />
                <SecondSection />
                <ThirdSection />
            </ToolBar>
        </Appbar>
    )
}

export default Header;
