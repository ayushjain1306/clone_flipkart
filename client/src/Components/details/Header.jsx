import React, { useContext, useState, useEffect } from "react"
import { AppBar, Toolbar, Box, Input, Typography, styled, List, ListItem } from "@mui/material";
import { styled as scStyled } from "styled-components";
import logo from "./images/logo.png";
import search from "./images/search.png";
import more from "./images/more.png";
import cart from "./images/cart.png";
import DialogBox from "../header/DialogBox.jsx";
import LogOutBox from "../header/LogOutBox.jsx";
import { DataContext } from "../../context/DataProvider";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import getProducts from "../../redux/actions/productActions";

const Appbar = styled(AppBar)`
    background-color: #2874f0;
    width: 100vw;
    left: 0px;

    @media screen and (max-width: 1100px){
        width: 100vw;
    }
`

const ToolBar = styled(Toolbar)`
    background-color: #2874f0;
    width: 100vw;
    margin: 0px;
    padding: 0px;

    @media screen and (max-width: 1100px){
        display: block;
    }
`

const NewLink = styled(Link)`
    background-color: #2874f0;
    margin-left: 11.6%;

    @media screen and (max-width: 1100px){
        margin-left: 36.5%;
    }
`

const NewBox = styled(Box)`
    background-color: white;
    width: 33%;
    margin-left: 1%;
    border-radius: 2px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1100px){
        width: 94%;
        margin: 0px 10px 3% 3%;
    }
`

const SecondBox = styled(Box)`
    background-color: #2874f0;
    display: flex;
    align-items: center;
    margin-left: 4%;

    @media screen and (max-width: 1100px){
        display: inline;
    }
`

const NewTypo = styled(Typography)`
    background-color: #2874f0;
    color: white;
    font-weight: bold;
    font-size: 15px;
    margin-left: 2%;

    @media screen and (max-width: 1100px){
        display: inline;
    }
`;

const AnotherLink = styled(Link)`
    background-color: #2874f0;
    display: flex;
    justify-content: center;
    text-decoration: none;

    @media screen and (max-width: 1100px){
        display: flex;
        align-items: center;
    }
`

const NewList = styled(List)`
    position: absolute;
    top: 60px;
    left: 18%;
    width: 44%;

    @media screen and (max-width: 1100px){
        width: 60%;
        top: 88px;
    }
`;

const Button = scStyled.button`
    background-color: #2874f0;
    border: 0px;
    width: 10%
    margin-left: 2%;
    cursor: pointer;

    @media screen and (max-width: 1100px){
        width: 28%
    }
`

const NewButton = scStyled.button`
    color: #2874f0;
    background-color: white;
    font-size: 15px;
    font-weight: bold;
    width: 10%;
    padding: 8px 0px;
    border: 0px;
    margin-left: 2%;
    cursor: pointer;

    @media screen and (max-width: 1100px){
        width: 20%;
        margin-bottom: 5px;
    }
`

function Header() {
    const {account} = useContext(DataContext);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [logOpen, setLogOpen] = useState(false);
    const [text, setText] = useState("");

    const handleOpen = () =>{
        setDialogOpen(true);
    }

    const handleLogOpen = ()=>{
        setLogOpen(true);
    }

    const handleChange = (e) =>{
        setText(e.target.value);
    }

    const {products} = useSelector(state => state.getProducts);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    }, [dispatch]);

    const filteredProducts = products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase()));

    const array = account.split(" ");

    return (
        <Appbar>
            <ToolBar>
                <NewLink to={"/"}>
                    <img src={logo} alt="logo" />
                </NewLink>

                <NewBox>
                    <Input variant = "standard" placeholder = "Search for products, brands & more" style ={{
                        backgroundColor: "white",
                        width: "90%",
                        marginLeft: "2%"
                    }} onChange= {(e) => handleChange(e)} />
                    <img src={search} alt="search" />
                </NewBox>

                {
                    account ?
                        <>
                            <Button onClick= {()=> handleLogOpen()}>
                                <div style ={{
                                    display: "flex",
                                    alignItems: "center",
                                    backgroundColor: "#2874f0",
                                    height: "100%"
                                }}>
                                    <div style ={{
                                        color: "#2874f0",
                                        borderRadius: "50%",
                                        backgroundColor: "white",
                                        height: "30px",
                                        width: "30px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontSize: "19px",
                                        marginLeft: "15%",
                                        fontWeight: "bold"
                                    }}>
                                        {array[0][0].toUpperCase()}
                                    </div>
                                    <Typography style ={{
                                        color: "white",
                                        margin: "0px 9%",
                                        backgroundColor: "#2874f0",
                                        fontWeight: "bold"
                                    }}>
                                        {array[0]}
                                    </Typography>
                                </div>
                            </Button>
                            <LogOutBox logOpen = {logOpen} setLogOpen = {setLogOpen} />
                        </>
                    : 
                        <>
                            <NewButton style ={{
                                
                            }} onClick = {()=> handleOpen()}>
                                Login
                            </NewButton>

                            <DialogBox open = {dialogOpen} setOpen = {setDialogOpen} />
                        </>
                }

                

                <NewTypo>
                    Become a Seller
                </NewTypo>

                <SecondBox>
                    <NewTypo>
                        More
                    </NewTypo>
                    <img src={more} alt="" />
                </SecondBox>

                <SecondBox>
                    <AnotherLink to= "/cart">
                        <img src={cart} alt="" />
                        <NewTypo>
                            Cart
                        </NewTypo>
                    </AnotherLink>
                </SecondBox>
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

            </ToolBar>
        </Appbar>
    )
}

export default Header;
