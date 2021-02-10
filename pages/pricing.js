import React from "react";
import FAQ from "../component/FAQ";
import PricingOffer from "../component/PricingOffer";
import axios from "axios";

function Pricing() {
    const [standard, setStandard] = React.useState("");
    const [rush, setRush] = React.useState("");
    const [onehour, setOneHour] = React.useState("");
    axios
        .get(process.env.REACT_APP_API + "/products/prices?productCodes=EIN_SoleProp",{mode:'no-cors',
            headers: {
                'Access-Control-Allow-Origin' : '*'
            }})
        .then((response) =>
            response.data.forEach((product) => {
                switch(product.option) {
                    case "RUSH":
                        setRush(product.price)
                        break;
                    case "STANDARD":
                        setStandard(product.price)
                        break;
                    case "ONE_HOUR":
                        setOneHour(product.price)
                        break;
                    default:
                }
            })
        );
    return (
        <div className="home about pricing">
            <div className="content">
                <h3 className="mt-4">Plans and Pricing</h3>
                <hr/>
                <p>
                    We have different pricing plans available so you can pick what best
                    suits your needs and turnaround time to help you get your EIN number.
                </p>
                <p>
                    Ein-Filing-Online will ensure that your EIN application is thoroughly
                    checked and submitted to IRS error-free. We advise you on how to
                    proceed to get the right type of EIN number for your business. We are
                    a private company not affiliated with the government. We charge a fee
                    for our application form service. You can apply for your ein number
                    directly with the IRS at no cost at www.irs.gov, however, you will
                    find it much easier to apply using our fast and easy forms and
                    first-class support service. As a part of our service all our our
                    customers receive a free application submission after we have
                    thoroughly prepared and checked your application form.
                </p>
            </div>
            <div className="content">
                <div className="box-offer-wrapper">
                    <PricingOffer
                        title="Standard"
                        descr="1-2 business day delivery time"
                        price={standard}
                        bullets={[
                            "1-2 Business day delivery time",
                            "EIN number completion guarantee, if there are any issues, we fix them at no cost to you!",
                            "Rest easy protection plan for any other issues that may come up regarding your we will take of it for you.",
                            "+Unlimited updates or changes with your EIN Number",
                            "Custom simplified online form",
                            "In-depth Review by an EIN specialist",
                            "Unlimited support for any problems (If you have to call into the IRS the typical wait time is over an hour if you can even get a hold of them)",
                            "Free application submission to the IRS",
                            "25% off on registering with the state (there are separate filing fees that go directly to the state too)",
                            "25% off using our registered agent service (this is to make sure you get all official mail and it’s required by every state to have a registered agent.",
                            "Free 30 minute consulting ($125 value) with a business expert to help make sure you are off to a good start (upon request)",
                            "Free 30 minute consulting ($100 value) with a tax specialist to make sure you are properly structuring yourself for taxes (upon request)",
                            "An operating agreement (this is upon request)",
                        ]}
                    />
                    <PricingOffer
                        title="Same Day"
                        descr="Same Business Day Delivery"
                        price={rush}
                        bullets={[
                            "Same Business Day Delivery",
                            "EIN number completion guarantee, if there are any issues, we fix them at no cost to you!",
                            "Rest easy protection plan for any other issues that may come up regarding your we will take of it for you.",
                            "+Unlimited updates or changes with your EIN Number",
                            "Custom simplified online form",
                            "In-depth Review by an EIN specialist",
                            "Unlimited support for any problems (If you have to call into the IRS the typical wait time is over an hour if you can even get a hold of them)",
                            "Free application submission to the IRS",
                            "50% off on registering with the state  (there are separate filing fees that go directly to the state too)",
                            "50% off using our registered agent service (this is to make sure you get all official mail and it’s required by every state to have a registered agent.",
                            "Free 30 minute consulting ($125 value) with a business expert to help make sure you are off to a good start (upon request)",
                            "Free 30 minute consulting ($100 value) with a tax specialist to make sure you are properly structuring yourself for taxes (upon request)",
                            "An operating agreement (this is upon request)",
                        ]}
                    />
                    <PricingOffer
                        title="1 Hour"
                        descr={
                            <React.Fragment>
                                1 hour delivery time<br/> <br/>
                            </React.Fragment>
                        }
                        price={onehour}
                        bullets={[
                            "1 hour delivery time or Rush fee is refunded",
                            "EIN number completion guarantee, if there are any issues, we fix them at no cost to you!",
                            "Rest easy protection plan for any other issues that may come up regarding your we will take of it for you.",
                            "+Unlimited updates or changes with your EIN Number",
                            "Custom simplified online form",
                            "In-depth Review by an EIN specialist",
                            "Unlimited support for any problems (If you have to call into the IRS the typical wait time is over an hour if you can even get a hold of them)",
                            "Free application submission to the IRS",
                            "75% off on registering with the state  (there are separate filing fees that go directly to the state too)",
                            "75% off using our registered agent service (this is to make sure you get all official mail and it’s required by every state to have a registered agent.",
                            "Free 30 minute consulting ($125 value) with a business expert to help make sure you are off to a good start (upon request)",
                            "Free 30 minute consulting ($100 value) with a tax specialist to make sure you are properly structuring yourself for taxes (upon request)",
                            "An operating agreement (this is upon request)",
                        ]}
                    />
                    <PricingOffer
                        selected={true}
                        title="State Filing Add On"
                        price={onehour}
                        bullets={[
                            "We file your state filing fees",
                            "The fee paid to the government is extra",
                            "Full money-back guarantee",
                        ]}
                    />
                </div>
            </div>
            <div className="blue-line">
                <h4>Frequently Asked Questions About EINs</h4>
            </div>
            <FAQ/>
        </div>
    );
}

export default Pricing;
