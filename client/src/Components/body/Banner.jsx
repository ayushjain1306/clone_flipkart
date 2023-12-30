import React from "react";
import { Box, styled } from "@mui/material"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import first from "./images/first.jpg"
import second from "./images/second.jpeg"
import third from "./images/third.jpg"
import forth from "./images/forth.jpg"
import fifth from "./images/fifth.jpeg"
import sixth from "./images/sixth.jpg"

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const bannerData = [
    {id:1, url: first},
    {id:2, url: second},
    {id:3, url: third},
    {id:4, url: forth},
    {id:5, url: fifth},
    {id:6, url: sixth}
]

const mobileBannerData = [
    {id: 1, url: "https://rukminim2.flixcart.com/fk-p-flap/750/350/image/b1d94612ba2f00fc.jpg?q=20"},
    {id: 1, url: "https://rukminim2.flixcart.com/fk-p-flap/750/350/image/53c204da7973eb08.png?q=20"},
    {id: 1, url: "https://rukminim2.flixcart.com/fk-p-flap/750/350/image/16973eff573256f4.jpg?q=20"},
    {id: 1, url: "https://rukminim2.flixcart.com/fk-p-flap/750/350/image/b7dead71f032a1c0.jpg?q=20"},
    {id: 1, url: "https://rukminim2.flixcart.com/fk-p-flap/750/350/image/9846940e96283fc7.png?q=20"},
    {id: 1, url: "https://rukminim2.flixcart.com/fk-p-flap/750/350/image/fb4008e00e5ed5b7.jpg?q=20"},
    {id: 1, url: "https://rukminim2.flixcart.com/fk-p-flap/750/350/image/4b2a7f45e432ccbc.jpg?q=20"},
]

const NewBox = styled(Box)`
    margin: 15px;
    background-color: whitesmoke;

    @media screen and (max-width: 700px){
        margin: 15px 0px;
    }
`

const FirstCarousel = styled(Carousel)`
    background-color: whitesmoke;
    display: flex;

    @media screen and (max-width: 700px){
        display: none;
    }
`

const SecondCarousel = styled(Carousel)`
    background-color: whitesmoke;
    display: none;

    @media screen and (max-width: 700px){
        display: flex;
    }
`

function Banner(){
    return(
        <NewBox>
            <FirstCarousel 
                responsive= {responsive}
                swipeable= {true}
                infinite = {true}
                dotListClass="custom-dot-list-style"
                autoPlay = {true}
                autoPlaySpeed={3000}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    bannerData.map(data =>{
                        return (
                            <img key={data.id} src={data.url} alt="image" style ={{
                                width: "100%",
                            }} />
                        )
                    })
                }
            </FirstCarousel>

            <SecondCarousel 
                responsive= {responsive}
                swipeable= {true}
                infinite = {true}
                dotListClass="custom-dot-list-style"
                autoPlay = {true}
                autoPlaySpeed={3000}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    mobileBannerData.map(data =>{
                        return (
                            <img key={data.id} src={data.url} alt="image" style ={{
                                width: "100%",
                            }} />
                        )
                    })
                }
            </SecondCarousel>
        </NewBox>
    )
}

export default Banner;