import React from 'react';
import { styled } from "styled-components";

import Header from './Components/header/Header';
import Navigation from "./Components/body/Navigation";
import Banner from "./Components/body/Banner";
import Slider from "./Components/body/Slider";
import AdSlider from "./Components/body/AdSlider";
import Discount from "./Components/body/Discount"
import Description from "./Components/body/Description";

const New = styled.div`
    margin-top: 72px;

    @media screen and (max-width : 1100px){
        margin-top: 160px;
    }
`

function Home({products}) {
    return (
        <>
            <Header />
            <New>
                <Navigation />
            </New>
            <Banner />
            <Discount />
            <AdSlider products= {products} title = "Deal of the Day" />
            <Slider products= {products} title = "Best of Products" />
            <Slider products= {products} title = "Best Sellers" />
            <Slider products= {products} title = "Kitchen Appliances, Health & more" />
            <Slider products= {products} title = "Home, Kitchen & more" />
            <Slider products= {products} title = "Home and Electronics Items" />
            <Description />
        </>
    )
}

export default Home;