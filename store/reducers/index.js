import { combineReducers } from 'redux'
import productReducer from './productsReducer'
import orderReducer from "./orderReducer";



export default combineReducers({
    products: productReducer,
    order: orderReducer
})