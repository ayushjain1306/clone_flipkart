import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import getProductsReducer, {getProductsDetailsReducer} from "./reducers/productReducers"
import cartReducer from "./reducers/cartReducer"

const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductsDetail: getProductsDetailsReducer,
    cart: cartReducer
})

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;