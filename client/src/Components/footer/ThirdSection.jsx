import React from "react"
import { Box, Typography, styled } from "@mui/material"
import seller from "./images/becomeSeller.jpg";
import advertise from "./images/advertise.jpg";
import gifts from "./images/gifts.jpg";
import help from "./images/help.jpg";

const NewBox = styled(Box)`
    display: flex;
    background-color: rgb(34, 32, 32);

    @media screen and (max-width: 700px){
        display: block;
    }
`

const FirstInsideBox = styled(Box)`
    margin: 20px 0px;
    background-color: rgb(34, 32, 32);
    display: flex;
    width: 100%;

    @media screen and (max-width: 700px){
        width: 100vw;
        padding-bottom: 20px;
        margin-bottom: 0px;
    }
`

function ThirdSection() {
    return (
        <NewBox>
            <FirstInsideBox>
                <div style ={{
                    display: "flex",
                    width: "25%",
                    backgroundColor: "rgb(34, 32, 32)",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "5px"
                }}>
                    <img src={seller} alt="" style={{
                        width: "10px",
                        height: "10px",
                        marginRight: "10px"
                    }} />
                    <Typography style ={{
                        backgroundColor: "rgb(34, 32, 32)",
                        color: "white",
                        fontSize: "12px"
                    }}>
                        Become a Seller
                    </Typography>
                </div>
                <div style ={{
                    display: "flex",
                    width: "25%",
                    backgroundColor: "rgb(34, 32, 32)",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <img src={advertise} alt="" style ={{
                        height: "10px",
                        width: "10px",
                        marginRight: "10px"
                    }} />
                    <Typography style ={{
                        backgroundColor: "rgb(34, 32, 32)",
                        color: "white",
                        fontSize: "12px"
                    }}>
                        Advertise
                    </Typography>
                </div>
                <div style ={{
                    display: "flex",
                    width: "25%",
                    backgroundColor: "rgb(34, 32, 32)",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <img src={gifts} alt="" style ={{
                        height: "10px",
                        width: "10px",
                        marginRight: "10px"
                    }} />
                    <Typography style ={{
                        backgroundColor: "rgb(34, 32, 32)",
                        color: "white",
                        fontSize: "12px"
                    }}>
                        Gift Cards
                    </Typography>
                </div>
                <div style ={{
                    display: "flex",
                    width: "25%",
                    backgroundColor: "rgb(34, 32, 32)",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <img src={help} alt="" style ={{
                        height: "10px",
                        width: "10px",
                        marginRight: "10px"
                    }} />
                    <Typography style ={{
                        backgroundColor: "rgb(34, 32, 32)",
                        color: "white",
                        fontSize: "12px"
                    }}>
                        Help Center
                    </Typography>
                </div>
            </FirstInsideBox>
        </NewBox>
    )
}

export default ThirdSection;