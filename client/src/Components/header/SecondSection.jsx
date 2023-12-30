import React, { useState, useEffect } from "react";
import search from "./images/searchLogo.png";
import { useSelector, useDispatch } from "react-redux";
import getProducts from "../../redux/actions/productActions";
import { Box, List, ListItem, styled } from "@mui/material";
import { Link } from "react-router-dom";

const NewBox = styled(Box) `
    color: black;
    background-color: rgb(225,246,255,0.7);
    width: 44.05%;
    border-radius: 10px;
    display: flex;
    align-items: center;

    @media screen and (max-width : 1100px){
        width: 90%;
        margin: auto;
    }
`

const NewList = styled(List)`
    position: absolute;
    top: 60px;
    width: 44%;

    @media screen and (max-width: 1100px){
        width: 60%;
        top: 90px;
        left: 18%;
    }
`


function SecondSection() {
    const [text, setText] = useState("");

    const { products } = useSelector(state => state.getProducts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const filteredProducts = products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase()));

    return (
        <NewBox>
            <img src={search} alt="search" style={{
                height: "18px",
                width: "3.5%",
                backgroundColor: "rgb(225,246,255,0.7)",
                marginLeft: "15px",
                padding: "8px",
                paddingLeft: "0px"
            }} />

            <input type="search" placeholder="Search for Products, Brands and More" style={{
                border: "0px",
                width: "90%",
                backgroundColor: "rgb(225,246,255,0.7)",
                color: "black",
                fontSize: "18px",
                margin: "10px 0px",
                outline: "none",
            }} onChange={(e) => handleChange(e)} />

            {text && (
                <NewList>
                    {filteredProducts.length === 0 ?
                        <ListItem>No result found</ListItem>
                        :

                        filteredProducts.map(product => {
                            return (
                                <ListItem key={product.id}>
                                    <Link to={`/products/${product.id}`} style ={{
                                        textDecoration: "none",
                                        cursor: "pointer",
                                        color: "black"
                                    }}>
                                        {product.title.longTitle}
                                    </Link>
                                </ListItem>
                            )
                        })}
                </NewList>
            )}

        </NewBox>
    )
}

export default SecondSection;