import React from "react"
import { Box, Typography, styled } from "@mui/material";
import offers from "./images/offers.png";
import mobiles from "./images/mobiles.png"
import electronics from "./images/electronics.png"
import appliances from "./images/appliances.png"
import fashion from "./images/fashion.png"
import beauty from "./images/beauty.png"
import home from "./images/home.png"
import furniture from "./images/furniture.png"
import flights from "./images/flights.png"
import grocery from "./images/grocery.png"

const NewBox = styled(Box)`
    background-color: white;
    margin: 0px 15px;
    padding: 0px 15px 2% 2%;
    display: flex;

    @media screen and (max-width : 700px){
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        width: 100vw;
        margin: 0px;
    }
`

const navData = [
    {url: offers, text: "Top Offers"},
    {url: mobiles, text: "Mobiles & Tablets"},
    {url: electronics, text: "Electronics"},
    {url: appliances, text: "TVs & Appliances"},
    {url: fashion, text: "Fashion"},
    {url: beauty, text: "Beauty"},
    {url: home, text: "Home & Kitchen"},
    {url: furniture, text: "Furniture"},
    {url: flights, text: "Flights"},
    {url: grocery, text: "Grocery"}
]

function Navigation() {
    return (
        <NewBox>
            {
                navData.map(data =>{
                    return (
                        <div key={data.text} style ={{
                            backgroundColor: "white",
                            width: "10%",
                            textAlign: "center",
                            marginTop: "20px"
                        }}>
                            <img src={data.url} alt="image" />
                            <Typography style ={{
                                backgroundColor: "white",
                                fontWeight: "bold",
                                fontSize: "14px",
                                marginTop: "4px",
                                color: "black"
                            }}>{data.text}</Typography>
                        </div>
                    );
                })
            }
        </NewBox>
    )
}

export default Navigation;