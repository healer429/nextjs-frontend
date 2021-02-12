import {GET_PRODUCTS, PRODUCTS_ERROR} from '../types'
import axios from 'axios'

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
export const customer = (orderInfo) => {
    return {
        email: orderInfo.customerEmail,
        phone: orderInfo.customerPhone.replace(/\D/g, ''),
    };
};
export const activity = (product, orderInfo) => {
    product.activityReasonForApplying = orderInfo.activityReasonForApplying;
    product.activityPrimaryActivity = orderInfo.activityPrimaryActivity;
    product.activitySpecificProducts = orderInfo.activitySpecificProducts;
    if (orderInfo.activitySpecificProducts === "other") {
        product.productDescription = orderInfo.activityProductDescription;
    }
}
export const questions = (product, orderInfo) => {
    if (orderInfo.questionsHighway) product.questionsHighway = orderInfo.questionsHighway === 'false' ? false : true;
    if (orderInfo.questionsGambling) product.questionsGambling = orderInfo.questionsGambling === 'false' ? false : true;
    if (orderInfo.questionsATF) product.questionsATF = orderInfo.questionsATF === 'false' ? false : true;
    if (orderInfo.questionsExcise) product.questionsExcise = orderInfo.questionsExcise === 'false' ? false : true;
    if (orderInfo.questionsAppliedBefore) product.questionsAppliedBefore = orderInfo.questionsAppliedBefore === 'false' ? false : true;
    if (orderInfo.questionsHire) product.questionsHire = orderInfo.questionsHire === 'false' ? false : true;
    if (product.questionsAppliedBefore) {
        product.previousEINNumberFirst2 = orderInfo.previousEINNumberFirst2;
        product.previousEINNumberLast7 = orderInfo.previousEINNumberLast7;
    }
    if (product.questionsHire) {
        product.payLessThan4k = orderInfo.payLessThan4k === 'false' ? false : true;
        if (product.payLessThan4k) {
            product.annualTaxes = orderInfo.annualTaxes === 'false' ? false : true;
        }
        product.numberOfAgricultureEmployees = parseInt(orderInfo.numberOfAgricultureEmployees);
        product.numberOfHouseholdeEmployees = parseInt(orderInfo.numberOfHouseholdeEmployees);
        product.numberOfOtherEmployees = parseInt(orderInfo.numberOfOtherEmployees);
        product.firstDateWages = date(orderInfo, "firstDateWages");
    }
}
export const person = (orderInfo, personId) => {
    return {
        firstName: orderInfo[personId + "FirstName"],
        middleName: orderInfo[personId + "MiddleName"],
        lastName: orderInfo[personId + "LastName"],
        suffixName: orderInfo[personId + "SuffixName"],
        title: orderInfo[personId + "Title"],
        ssn: orderInfo[personId + "SSN"]
    };
};
export const date = (orderInfo, dateId) => {
    const year = parseInt(orderInfo[dateId + "Year"]);
    const month = parseInt(orderInfo[dateId + "Month"]) - 1; // to start from 0
    const day = parseInt(orderInfo[dateId + "Day"]);
    return new Date(year, month, day, 10, 0, 0).toISOString().slice(0, 19);
};

export const getProducts = () => async dispatch => {

    try {
        const res = await axios.get(process.env.REACT_APP_API + "/products/codes")
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: PRODUCTS_ERROR,
            payload: console.log(e),
        })
    }

}

/* Product actions */
export const trustEinOrder = (orderInfo, history) => {
    return dispatch => {
        const product = {
            code: orderInfo.code,
            customerName: orderInfo.customerName,
            legalName: orderInfo.legalName,
            trustType: orderInfo.trustType,
            corpAddress: address(orderInfo, "trusteeAddress"),
            altAddress: orderInfo.altAddress === 'false' ? null : address(orderInfo, "altAddress"),
            startDate: date(orderInfo, "startDate"),
            closingMonth: orderInfo.closingMonth,
            creater: person(orderInfo, "creater"),
            trustee: person(orderInfo, "trustee"),
            dbaname: orderInfo.dbaname
        }
        questions(product, orderInfo);
        const order = {product: product, customer: customer(orderInfo)};
        dispatch(orderCreate(order, history));
    };
};

export const estateEinOrder = (orderInfo, history) => {
    return dispatch => {
        const product = {
            code: orderInfo.code,
            customerName: orderInfo.customerName,
            corpAddress: address(orderInfo, "representativeAddress"),
            altAddress: orderInfo.altAddress === 'false' ? null : address(orderInfo, "altAddress"),
            dateOfDeath: date(orderInfo, "dateOfDeath"),
            closingMonth: orderInfo.closingMonth,
            deceased: person(orderInfo, "deceased"),
            representative: person(orderInfo, "representative"),
            dbaname: orderInfo.dbaname
        }
        const order = {product: product, customer: customer(orderInfo)};
        dispatch(orderCreate(order, history));
    };
};

export const nonProfitEinOrder = (orderInfo, history) => {
    return dispatch => {
        const product = {
            code: orderInfo.code,
            customerName: orderInfo.customerName,
            legalName: orderInfo.legalName,
            nonProfitType: orderInfo.nonProfitType,
            startDate: date(orderInfo, "startDate"),
            closingMonth: orderInfo.closingMonth,
            corpAddress: address(orderInfo, "corpAddress"),
            altAddress: orderInfo.altAddress === 'false' ? null : address(orderInfo, "altAddress"),
            responsibleParty: person(orderInfo, "responsibleParty"),
            dbaname: orderInfo.dbaname
        }
        activity(product, orderInfo);
        questions(product, orderInfo);
        const order = {product: product, customer: customer(orderInfo)};
        dispatch(orderCreate(order, history));
    };
};

export const churchEinOrder = (orderInfo, history) => {
    return dispatch => {
        const product = {
            code: orderInfo.code,
            customerName: orderInfo.customerName,
            legalName: orderInfo.legalName,
            organizedState: orderInfo.organizedState,
            startDate: date(orderInfo, "startDate"),
            closingMonth: orderInfo.closingMonth,
            corpAddress: address(orderInfo, "corpAddress"),
            altAddress: orderInfo.altAddress === 'false' ? null : address(orderInfo, "altAddress"),
            responsibleParty: person(orderInfo, "responsibleParty"),
            dbaname: orderInfo.dbaname
        }
        activity(product, orderInfo);
        questions(product, orderInfo);
        const order = {product: product, customer: customer(orderInfo)};
        dispatch(orderCreate(order, history));
    };
};

export const partnershipEinOrder = (orderInfo, history) => {
    return dispatch => {
        const product = {
            code: orderInfo.code,
            customerName: orderInfo.customerName,
            legalName: orderInfo.legalName,
            organizedState: orderInfo.organizedState,
            startDate: date(orderInfo, "startDate"),
            closingMonth: orderInfo.closingMonth,
            corpAddress: address(orderInfo, "corpAddress"),
            altAddress: orderInfo.altAddress === 'false' ? null : address(orderInfo, "altAddress"),
            primaryPartner: person(orderInfo, "primaryPartner"),
            dbaname: orderInfo.dbaname
        }
        activity(product, orderInfo);
        questions(product, orderInfo);
        const order = {product: product, customer: customer(orderInfo)};
        dispatch(orderCreate(order, history));
    };
};

export const pSCEinOrder = (orderInfo, history) => {
    return dispatch => {
        const product = {
            code: orderInfo.code,
            customerName: orderInfo.customerName,
            legalName: orderInfo.legalName,
            organizedState: orderInfo.organizedState,
            startDate: date(orderInfo, "startDate"),
            closingMonth: orderInfo.closingMonth,
            corpAddress: address(orderInfo, "corpAddress"),
            altAddress: orderInfo.altAddress === 'false' ? null : address(orderInfo, "altAddress"),
            principalOfficer: person(orderInfo, "principalOfficer"),
            dbaname: orderInfo.dbaname
        }
        activity(product, orderInfo);
        questions(product, orderInfo);
        const order = {product: product, customer: customer(orderInfo)};
        dispatch(orderCreate(order, history));
    };
};

export const cCorpEinOrder = (orderInfo, history) => {
    return dispatch => {
        const product = {
            code: orderInfo.code,
            customerName: orderInfo.customerName,
            legalName: orderInfo.legalName,
            organizedState: orderInfo.organizedState,
            startDate: date(orderInfo, "startDate"),
            closingMonth: orderInfo.closingMonth,
            corpAddress: address(orderInfo, "corpAddress"),
            altAddress: orderInfo.altAddress === 'false' ? null : address(orderInfo, "altAddress"),
            principalOfficer: person(orderInfo, "principalOfficer"),
            dbaname: orderInfo.dbaname
        }
        activity(product, orderInfo);
        questions(product, orderInfo);
        const order = {product: product, customer: customer(orderInfo)};
        dispatch(orderCreate(order, history));
    };
};
export const sCorpEinOrder = (orderInfo, history) => {
    return dispatch => {
        const product = {
            code: orderInfo.code,
            customerName: orderInfo.customerName,
            legalName: orderInfo.legalName,
            organizedState: orderInfo.organizedState,
            startDate: date(orderInfo, "startDate"),
            closingMonth: orderInfo.closingMonth,
            corpAddress: address(orderInfo, "corpAddress"),
            altAddress: orderInfo.altAddress === 'false' ? null : address(orderInfo, "altAddress"),
            principalOfficer: person(orderInfo, "principalOfficer"),
            dbaname: orderInfo.dbaname
        }
        activity(product, orderInfo);
        questions(product, orderInfo);
        const order = {product: product, customer: customer(orderInfo)};
        dispatch(orderCreate(order, history));
    };
};

export const llcEinOrder = (orderInfo, history) => {
    return dispatch => {
        const product = {
            code: orderInfo.code,
            customerName: orderInfo.customerName,
            legalName: orderInfo.legalName,
            numberOfMembers : orderInfo.LLCMembers,
            organizedState: orderInfo.organizedState,
            startDate: date(orderInfo, "startDate"),
            closingMonth: orderInfo.closingMonth,
            corpAddress: address(orderInfo, "corpAddress"),
            altAddress: orderInfo.altAddress === 'false' ? null : address(orderInfo, "altAddress"),
            owner: person(orderInfo, "owner"),
            taxClassification: orderInfo.taxClassification,
            dbaname: orderInfo.dbaname
        }
        activity(product, orderInfo);
        questions(product, orderInfo);
        const order = {product: product, customer: customer(orderInfo)};
        dispatch(orderCreate(order, history));
    };
};
export const solePropEinOrder = (orderInfo, history) => {
    return dispatch => {
        const product = {
            code: orderInfo.code,
            customerName: orderInfo.customerName,
            startDate: date(orderInfo, "startDate"),
            closingMonth: orderInfo.closingMonth,
            corpAddress: address(orderInfo, "corpAddress"),
            altAddress: orderInfo.altAddress === 'false' ? null : address(orderInfo, "altAddress"),
            owner: person(orderInfo, "owner"),
            dbaname: orderInfo.dbaname
        }
        activity(product, orderInfo);
        questions(product, orderInfo);
        const order = {product: product, customer: customer(orderInfo)};
        dispatch(orderCreate(order, history));
    }
};

export const orderCreate = (order, history) => {
    if (localStorage.getItem("clid")) {
        order.order ? order.order.clid = localStorage.getItem("clid") : order.order = {clid:localStorage.getItem("clid")}
    }

    if (localStorage.getItem("source")) {
        order.order ? order.order.source = localStorage.getItem("source") : order.order = {source:localStorage.getItem("source")}
    }

    if (localStorage.getItem("keyword")) {
        order.order ? order.order.keyword = localStorage.getItem("keyword") : order.order = {keyword:localStorage.getItem("keyword")}
    }
    return dispatch => {
        dispatch(orderStarted());
        return axios
            .post(process.env.REACT_APP_API + "/products", order, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                // send success action
                dispatch(orderSuccess(response.data));
                history.push('/payment');
            })
            .catch(error => {
                if (
                    error.response &&
                    error.response.data
                ) {
                    dispatch(orderFailure({message: error.response.data}));
                } else {
                    dispatch(orderFailure(error));
                }
            });
    }
}

export const orderStarted = () => ({
    type: "ORDER_STARTED"
});

export const orderSuccess = order => ({
    type: "ORDER_SUCCESS",
    order: order
});

export const orderFailure = error => ({
    type: "ORDER_FAILURE",
    error: error
});
