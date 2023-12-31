import React, {useEffect} from "react";
import { Routes, Route, BrowserRouter, Redirect } from "react-router-dom";

import './App.css';
import Home from "./Home.jsx";
import Details from "./Components/details/Details.jsx";
import Cart from "./Components/cart/Cart.jsx";
import Footer from "./Components/footer/Footer";
import DataProvider from './context/DataProvider';
import {useDispatch, useSelector} from "react-redux";
import getProducts from './redux/actions/productActions';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  }, [dispatch])

  let {products} = useSelector(state => state.getProducts);

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home products = {products} />} />
          <Route path = "/products/:id" element = {<Details />} />
          <Route path = "/cart" element = {<Cart />} />
          <Redirect to = "/">
        </Routes>
        <Footer />
      </BrowserRouter>
    </DataProvider>
     
  );
}

export default App;
