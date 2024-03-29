import React from "react";
import {Box, Typography, styled} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
};

const NewBox = styled(Box)`
    margin: 0px 15px 15px 15px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 700px){
        margin: 15px 0px 0px 0px;
        width: 100vw;
    }
`

const SecondBox = styled(Box)`
    background-color: white;
    width: 85%;
    margin-right: 15px;

    @media screen and (max-width: 700px){
        width: 100%;
    }
`

const AnotherBox = styled(Box) `
    @media screen and (max-width: 700px){
        display: none;
    }
`

const Typo = styled(Typography) `
    background-color: white;
    font-size: 25px;
    color: black;
    margin: 20px 20px 15px 20px;

    @media screen and (max-width: 700px){
        font-size: 18px;
    }
`

function AdSlider({products, title}) {
    return (
        <NewBox>
            <SecondBox>
                <Box style ={{
                    backgroundColor: "white",
                }}>
                    <Typo>
                        {title}
                    </Typo>
                </Box>
                <Carousel 
                    responsive={responsive}
                    swipeable={true}
                    infinite={true}
                    itemClass="carousel-item-padding-40-px"

                    style ={{
                        backgroundColor: "white"
                    }}
                >
                    {
                        products.map(data =>{
                            return (
                                <div style ={{
                                    width: "100%",
                                    backgroundColor: "white",
                                    paddingBottom: "20px"
                                }} key = {data.id}>
                                    <Link to = {`products/${data.id}`} style ={{
                                        cursor: "pointer",
                                        textDecoration: "none"
                                    }}>
                                        <div style ={{
                                            width: "85%",
                                            textAlign: "center",
                                            border: "1px solid rgba(0,0,0,0.12)",
                                            margin: "auto",
                                            backgroundColor: "white",
                                            borderRadius: "4px"
                                        }}>
                                            <img src = {data.url} alt = "image" style= {{
                                                width: "80%",
                                                height: "200px",
                                                marginTop: "10px"
                                            }} />

                                            <Typography style ={{
                                                backgroundColor: "white",
                                                color: "black",
                                                marginTop: "5px"
                                            }}>{data.title.shortTitle}</Typography>

                                            <Typography style ={{
                                                backgroundColor: "white",
                                                color: "black",
                                                fontWeight: "bold"
                                            }}>
                                                At Rs.{data.price.cost}
                                            </Typography>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </SecondBox>
            <AnotherBox>
                    <img src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70" alt="image" style ={{
                        height: "100%",
                        width: "100%"
                    }} />
            </AnotherBox>
        </NewBox>
    )
}

export default AdSlider;
