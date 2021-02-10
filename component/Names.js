import React from "react";
import {Form} from "react-bootstrap";

export default function Names(props) {
    return (
        <>
            <Form.Group controlId={props.id + "FirstName"}>
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" required placeholder="First name" onKeyPress={(event) => {
                    if (!/[a-zA-Z/-]/.test(event.key)) event.preventDefault();
                }}
                              onChange={props.onChange}/>
                <Form.Control.Feedback type="invalid">
                    Please provide a valid name
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId={props.id + "MiddleName"}>
                <Form.Label>Middle name (optional)</Form.Label>
                <Form.Control type="text" placeholder="Middle name" onChange={props.onChange} onKeyPress={(event) => {
                    if (!/[a-zA-Z/-]/.test(event.key)) event.preventDefault();
                }}/>
            </Form.Group>
            <Form.Group required controlId={props.id + "LastName"}>
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" required placeholder="Last name"
                              onChange={props.onChange} onKeyPress={(event) => {
                    if (!/[a-zA-Z/-]/.test(event.key)) event.preventDefault();
                }}/>
                <Form.Control.Feedback type="invalid">
                    Please provide last name
                </Form.Control.Feedback>
            </Form.Group>
        </>
    )
}
