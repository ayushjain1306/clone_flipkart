import React, {useContext} from "react"
import {Dialog, Box, Typography, styled} from "@mui/material"
import { DataContext } from "../../context/DataProvider.jsx"

const NewDialog = styled(Dialog)`
    height: 35%;
    width: 30%;
    margin: auto;

    @media screen and (max-width: 1100px){
        width: 85%;
    }
`

const First = styled(Box)`
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`
const Second = styled(Box)`
    background-color: #2874f0;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-right: 15px;
`
const Name = styled(Typography)`
    font-size: 20px;
`


function LogOutBox({logOpen, setLogOpen}) {
    const {account, setAccount} = useContext(DataContext);

    const handleClose = ()=>{
        setLogOpen(false);
    }

    const handleClick = ()=>{
        setAccount("");
        handleClose();
    }

    return (
        <NewDialog open= {logOpen} onClose= {()=>handleClose()}>
            <Box style ={{backgroundColor: "whitesmoke", width: "300px"}}>
                <First>
                    <Second>
                        {account[0][0]}
                    </Second>
                    <Name>
                        {account}
                    </Name>
                </First>
                <button style = {{
                    border: "0px",
                    fontSize: "18px",
                    backgroundColor: "#2874f0",
                    color: "white",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    width: "85%",
                    margin: "20px 20px 7.5% 7.5%",
                    cursor: "pointer"
                }} onClick={()=>handleClick()} >
                    Sign Out
                </button>
            </Box>
        </NewDialog>
    )
}

export default LogOutBox;