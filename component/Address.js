import React from "react";
import {Form} from "react-bootstrap";
import {RegionDropdown} from 'react-country-region-selector';
import InputMask from "react-input-mask";

export default function Address(props) {
    return (
        <div>
            {props.header ? <h5>{props.header}</h5> : null}
            <Form.Group controlId={props.id + "Address1"}>
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" defaultValue={props.state[props.id + "Address1"]}
                              onChange={props.onChange} required/>
                <Form.Control.Feedback type="invalid">
                    Please provide a proper address
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId={props.id + "Address2"}>
                <Form.Label>Address 2</Form.Label>
                <Form.Control type="text" placeholder="Address" defaultValue={props.state[props.id + "Address2"]}
                              onChange={props.onChange}/>
            </Form.Group>
            <Form.Group controlId={props.id + "City"}>
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" defaultValue={props.state[props.id + "City"]}
                              onChange={props.onChange}
                              onKeyPress={(event) => {
                                  if (!/[a-zA-Z/-]/.test(event.key)) event.preventDefault();
                              }}
                              required/>
                <Form.Control.Feedback type="invalid">
                    Please provide a city name
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId={props.id + "Zip"}>
                <Form.Label>Zip</Form.Label>
                <InputMask mask="99999" onChange={props.onChange} defaultValue={props.state[props.id + "Zip"]}
                           maskChar={null}>
                    {(inputProps) => <Form.Control required type="text" defaultValue={props.state[props.id + "Zip"]}
                                                   placeholder="Zip"
                                                   pattern=".{5,}"/>}
                </InputMask>
                <Form.Control.Feedback type="invalid">
                    Please provide a zip code.
                </Form.Control.Feedback>
            </Form.Group>
            {/*<Form.Group controlId={props.id + "Country"}>*/}
            {/*    <Form.Label>Country</Form.Label>*/}
            {/*    <CountryDropdown valueType="short" required*/}
            {/*                     className="form-control" id={props.id + "Country"}*/}
            {/*                     name={props.id + "Country"} value={props.state[props.id + "Country"]}*/}
            {/*                     onChange={(val, e) => props.onChange(e)}/>*/}
            {/*</Form.Group>*/}
            <Form.Group controlId={props.id + "State"}>
                <Form.Label>State</Form.Label>
                <RegionDropdown required className="form-control" id={props.id + "State"}
                                name={props.id + "State"}
                                country={props.state[props.id + "Country"]} countryValueType="short"
                                value={props.state[props.id + "State"]} valueType="short"
                                onChange={(val, e) => props.onChange(e)}/>
                <Form.Control.Feedback type="invalid">
                    Please select State.
                </Form.Control.Feedback>
            </Form.Group>
            {props.noCounty ? null :
                <Form.Group controlId={props.id + "County"}>
                    <Form.Label>County</Form.Label>
                    {props.isCountyRequired ? (
                        <Form.Control type="text" placeholder="County" required onKeyPress={(event) => {
                            if (!/[a-zA-Z/-]/.test(event.key)) event.preventDefault();
                        }} onChange={props.onChange}/>) : (
                        <Form.Control type="text" placeholder="County" onKeyPress={(event) => {
                            if (!/[a-zA-Z/-]/.test(event.key)) event.preventDefault();
                        }} onChange={props.onChange}/>)}
                    <Form.Control.Feedback type="invalid">
                        Please provide a County.
                    </Form.Control.Feedback>
                </Form.Group>
            }
        </div>
    )
}
