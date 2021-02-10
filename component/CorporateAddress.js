import React from "react";
import Fieldset from "./Fieldset";
import Address from "./Address";

export default function CorporateAddress(props) {
    const getAltAddress = () => {
        return (props.state.altAddress === "false" ? null :
                <Address id="altAddress"
                         state={props.state}
                         onChange={props.onChange}/>
        )
    }
    return (
        <div>
            <Address header={props.header} id={props.id}
                     state={props.state} isCountyRequired={true}
                     onChange={props.onChange}/>
            <div className="radio">
                <Fieldset id="altAddress" label="Do you want to receive your mail at another address?"
                          questionValue={props.state.altAddress} onChange={props.onChange}/>
            </div>
            {getAltAddress()}

        </div>
    )
}
