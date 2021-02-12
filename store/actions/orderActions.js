import axios from 'axios'
import * as TagManager from "react-gtm-module";

export const address = (orderInfo, addressId) => {
    return {
        address1: orderInfo[addressId + "Address1"],
        address2: orderInfo[addressId + "Address2"],
        city: orderInfo[addressId + "City"],
        state: orderInfo[addressId + "State"],
        zip: orderInfo[addressId + "Zip"],
        country: orderInfo[addressId + "Country"],
        county: orderInfo[addressId + "County"]
    };
};

export const orderPayment = (paymentInfo, history) => {
    return dispatch => {
        dispatch(paymentStarted());
        let date = paymentInfo.expiryDate.replace(/\s/g, '').split("/");
        const paymentData = {
            firstName: paymentInfo.firstName,
            lastName: paymentInfo.lastName,
            cardNumber: paymentInfo.cardNumber.replace(/\s/g, ''),
            expMonth: date[0],
            expYear: "20" + date[1],
            cvv: paymentInfo.cvc,
            processingOption: paymentInfo.processingOption,
            billingAddress: paymentInfo.billingAddress === 'false' ? null : address(paymentInfo, "billingAddress"),
        }
        return axios
            .post(process.env.REACT_APP_API + "/orders/" + paymentInfo.orderId + "/payment-details", paymentData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                // send success action
                if (response.data.order.crmOrderStatus !== "DECLINED") {
                    TagManager.dataLayer({
                        dataLayer: {
                            'event': 'gtm.sale',
                            'eventProps': {
                                'cardType': response.data.order.paymentDetails.cardType,
                                'category': 'purchases',
                                'action': 'sale',
                                'label': response.data.order.crmOrderId,
                                'value': response.data.order.total
                            }
                        }
                    });

                    dispatch(paymentSuccess(response.data));
                    history.push('/thankyou');
                } else {
                    dispatch(paymentFailure({message: response.data.order.crmErrorMessage}));
                }
            })
            .catch(error => {
                if (
                    error.response &&
                    error.response.data
                ) {
                    error.response.data.errors ? dispatch(paymentFailure({message: error.response.data.errors[0]})) : dispatch(paymentFailure({message: error.response.data.message}));
                } else {
                    dispatch(paymentFailure(error));
                }
            });
    };
}
export const paymentStarted = () => ({
    type: "PAYMENT_STARTED"
});

export const paymentSuccess = order => ({
    type: "PAYMENT_SUCCESS",
    order: order
});

export const paymentFailure = error => ({
    type: "PAYMENT_FAILURE",
    error: error
});

export const clearErrorMessage = () => ({
    type: "CLEAR_ERROR"
});
export const clearOrder = () => ({
    type: "CLEAR_ORDER"
});
export const checkOrder = (orderId, history) => {
    return dispatch => {
        dispatch(checkOrderStarted());
        return axios
            .get(process.env.REACT_APP_API + "/orders/ein-status/" + orderId, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                dispatch(checkOrderSuccess(response.data));
            })
            .catch(error => {
                if (
                    error.response &&
                    error.response.data
                ) {
                    dispatch(checkOrderFailure({message: error.response.data.message}));
                } else {
                    dispatch(checkOrderFailure(error));
                }
            });
    };
}
export const checkOrderStarted = () => ({
    type: "ORDER_STATUS_STARTED"
});

export const checkOrderSuccess = order => ({
    type: "ORDER_STATUS_SUCCESS",
    order: order
});

export const checkOrderFailure = error => ({
    type: "ORDER_STATUS_FAILURE",
    error: error
});
