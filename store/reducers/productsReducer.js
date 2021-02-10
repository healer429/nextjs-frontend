
import {GET_PRODUCTS} from '../types'

const initialState = {
    products:[],
    loading:true,
    order: null,
    error: null,
}
// eslint-disable-next-line
export default function(state = initialState, action){

    switch(action.type){

        case GET_PRODUCTS:
            return {
                ...state,
                products:action.payload,
                loading:false
            }
        case "ORDER_SUCCESS":
            return {
                ...state,
                order: action.order,
                loading: false,
                error: null
            }
        default: return state
    }

}