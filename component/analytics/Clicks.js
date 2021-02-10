import axios from "axios";

export default function Clicks(location) {
    if(location.search.includes('clid')) {
        const urlParams = new URLSearchParams(location.search)
        const clid = urlParams.get('clid')
        localStorage.setItem('clid', clid);
    }
    if(location.search.includes('source')) {
        const urlParams = new URLSearchParams(location.search)
        const source = urlParams.get('source')
        localStorage.setItem('source', source);
    }
    if(location.search.includes('keyword')) {
        const urlParams = new URLSearchParams(location.search)
        const keyword = urlParams.get('keyword')
        localStorage.setItem('keyword', keyword);
    }
    let pageType = 'presellPage';
    if(location.pathname.includes('EIN')) pageType = 'leadPage'; else
        if(location.pathname.includes('payment')) pageType='checkoutPage'; else
            if(location.pathname.includes('thankyou')) pageType='thankyouPage'

    axios
        .post(process.env.REACT_APP_API + "/clicks", {pageType: pageType}, {withCredentials: true})
        .then((response) => {
            }
        )
        .catch(error => {
        });
}