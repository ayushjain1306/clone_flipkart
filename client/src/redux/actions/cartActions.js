import axios from "axios";
import * as actionTypes from "../constants/cartConstants.js";

const URL = "clone-flipkart-mern.vercel.app";

export const addToCart = (id, quantity) => async (dispatch) =>{
    try {
        const { data } = await axios.get(`${URL}/products/${id}`)

        dispatch({
            type: actionTypes.ADD_TO_CART,
            payload: {...data, quantity}
        })
    }
    catch (error){
        dispatch({
            type: actionTypes.ADD_TO_CART_ERROR,
            payload: error.message
        })
    }
}

export const removeFromCart = (id) => (dispatch) =>{
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })
}
