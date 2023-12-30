import axios from 'axios';

import * as actionTypes from "../constants/productConstant.js"

const URL = "clone-flipkart-mern.vercel.app";

const getProducts = () => async function(dispatch) {
    try {
        let { data } = await axios.get(`${URL}/products`);
        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        })
    }
    catch (error){
        dispatch({
            type:actionTypes.GET_PRODUCTS_FAIL,
            payload: error.message
        })
    }
}

export const getProductDetails = (id) => async function(dispatch) {
    try {
        dispatch({
            type: actionTypes.GET_PRODUCTSDETAILS_LOADING
        })

        let { data } = await axios.get(`${URL}/products/${id}`)

        dispatch({
            type: actionTypes.GET_PRODUCTSDETAILS_SUCCESS,
            payload: data
        })
    }
    catch (error){
        dispatch({
            type: actionTypes.GET_PRODUCTSDETAILS_FAIL,
            error: error.message
        })
    }
}

export default getProducts;