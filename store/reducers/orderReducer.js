const initialState = {
    order: null,
    loading: false,
    error: null,
}
// eslint-disable-next-line
export default function (state = initialState, action) {

    switch (action.type) {

        case "PAYMENT_STARTED": {
            return {
                ...state,
                loading: true
            };
        }
        case "PAYMENT_SUCCESS": {
            return {
                ...state,
                order: action.order,
                loading: false,
                error: null
            };
        }
        case "PAYMENT_FAILURE": {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        case "ORDER_STATUS_STARTED": {
            return {
                ...state,
                loading: true
            };
        }
        case "ORDER_STATUS_SUCCESS": {
            return {
                ...state,
                order: action.order,
                loading: false,
                error: null
            };
        }
        case "CLEAR_ORDER": {
            return {
                ...state,
                order: null,
                loading: false,
                error: null
            };
        }
        case "ORDER_STATUS_FAILURE": {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        default:
            return state
    }
}