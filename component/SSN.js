import React from "react";
import {Form, OverlayTrigger, Tooltip} from "react-bootstrap";
import InputMask from "react-input-mask";

export default function SSN(props) {
    return (
        <div>
                <Form.Group controlId={props.id + "SSN"}>
                    <Form.Label>Social Security Number   <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                            <Tooltip id="overlay-example">
                                <strong>Why do we need this?</strong><br />
                                Your valid Social Security Number is needed by the IRS to obtain an EIN. Rest assured, all Social Security Numbers are stored in a fully protected fashion.
                            </Tooltip>
                        }
                    ><span className="question" /></OverlayTrigger></Form.Label>
                    <InputMask mask="999-99-9999" onChange={props.onChange} defaultValue={props.state[props.id + "SSN"]} maskChar={null}>
                        {(inputProps) => <Form.Control required type="text" defaultValue={props.state[props.id + "SSN"]} placeholder="123-45-6789"
                                                       pattern=".{11,}"/>}
                    </InputMask>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Social Security Number Ex: 123-45-6789
                    </Form.Control.Feedback>
                </Form.Group>
        </div>
    )
}
