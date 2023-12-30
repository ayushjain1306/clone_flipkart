import * as actionType from "../constants/productConstant.js"

function getProductsReducer(state = {products: []}, action) {
    switch (action.type) {
        case actionType.GET_PRODUCTS_SUCCESS:
            return {products: action.payload}
    
        case actionType.GET_PRODUCTS_FAIL:
            return {error: action.payload}

        default: 
            return state;
    }
}

export function getProductsDetailsReducer(state = {product: {}}, action){
    switch (action.type) {
        case actionType.GET_PRODUCTSDETAILS_LOADING:
            return {loading: true};
        
        case actionType.GET_PRODUCTSDETAILS_SUCCESS:
            return {loading: false, product: action.payload};

        case actionType.GET_PRODUCTSDETAILS_FAIL:
            return {loading: false, error: action.payload};

        case actionType.GET_PRODUCTSDETAILS_RESET:
            return {product: {}};

        default:
            return state;
    }
}

export default getProductsReducer;