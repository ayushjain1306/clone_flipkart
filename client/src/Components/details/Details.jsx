import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header.jsx";
import { useParams } from "react-router-dom";
import {getProductDetails} from "../../redux/actions/productActions";
import BodyDetails from "./BodyDetails.jsx";

function Details() {
    const dispatch = useDispatch();

    const { id } = useParams();

    const {loading, product} = useSelector(state => state.getProductsDetail);
    
    useEffect(()=>{
        if (product && id !== product.id){
            dispatch(getProductDetails(id));
        }
    }, [dispatch, id, loading, product]);
    
    return (
        <>
            <Header />

            {
                product && Object.keys(product).length && <BodyDetails loading= {loading} product = {product} />
            }
            
            
        </>
    )
}

export default Details;